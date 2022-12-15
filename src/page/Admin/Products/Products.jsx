import React, { useEffect, useState, useMemo } from "react";
import Admin from "..";
import { getListProducts, deleteProduct, editProduct, addProduct } from "../../../api";
import Pagination from "../../../components/Pagination/Pagination";
import ProductList from "./Table";
import EditForm from "./EditForm";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const PageSize = 10;

function Products() {
  const param = useParams();
  const [products, setProducts] = useState(null);
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const user = JSON.parse(localStorage.getItem("user"));

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const {
    isOpen: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();

  const BASE_DATA = 
    {
      id:"",
      name: "",
      price: "",
      description:"",
      images: ""
    }
  
  const [itemActive, setItemActive] = useState(BASE_DATA);

  const [search, setSearch] = useState("");

  const handleDeleteOpen = (item) => {
    onDeleteOpen();
    setItemActive(item);
  };

  const handleEditOpen = (item) => {
    onEditOpen();
    setItemActive(item);
  };

  const fechProducts = async () => {
    try {
      const res = await getListProducts(param.id);
      setProducts(res?.listOfItems);
      onDeleteClose();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteBooths = async () => {
    try {
      await deleteProduct(itemActive.id);
      fechProducts();
      setItemActive(BASE_DATA);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBooth = async (values) => {


    const formdata = new FormData();
    formdata.append("_method", "POST");
    formdata.append("menu_id", param.id);

    formdata.append("name", values.name);
    formdata.append("price", values.price);
    formdata.append("description", values.description);
    formdata.append("image", values.image);
    
   
    try {
      await axios
        .post("https://backend-et52mqssfq-as.a.run.app/api/item", formdata, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          fechProducts();
          setItemActive(BASE_DATA);
          onAddClose();
        });
    } catch (error) {
      console.log(error);
    }

    
  };

  const handleEditBooth = async (values) => {

    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("name", values.name);
    formdata.append("menu_id", param.id);

    formdata.append("price", values.price);
    formdata.append("description", values.description);
    formdata.append("image", values.image);
    
   
    try {
      await axios
        .put(`https://backend-et52mqssfq-as.a.run.app/api/item${itemActive.id}`, formdata, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          fechProducts();
          setItemActive(BASE_DATA);
          onAddClose();
        });
    } catch (error) {
      console.log(error);
    }

   
  };

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    let newList = products?.filter((item) =>
      item?.name?.toLowerCase().includes(search.toLowerCase())
    );
    return newList?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products, search]);

  useEffect(() => {
    fechProducts();
  }, []);

  return (
    <Admin>
      <ProductList
        currentTableData={currentTableData}
        onSearch={(value) => setSearch(value)}
        onDeleteOpen={handleDeleteOpen}
        onEditOpen={handleEditOpen}
        onAddOpen={onAddOpen}
        title="Product list"
        addtext = "New product"
      />
      <div className="center">
        {products && (
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={products?.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>

      {/* Modal Delete */}

      <Modal isCentered isOpen={isDeleteOpen} onClose={onDeleteClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>本当に削除しますか?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            この操作により、データが失われる可能性があります
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={deleteBooths}
              deleteBooths
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* ModalEdit */}
      <Modal isCentered isOpen={isEditOpen} onClose={onEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>編集ブース</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditForm
              onSubmit={handleEditBooth}
              initialValues
              itemActive={itemActive}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Modal add */}

      <Modal isCentered isOpen={isAddOpen} onClose={onAddClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新しいブースを追加しました</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditForm
              onSubmit={handleAddBooth}
              initialValues
              itemActive={itemActive}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Admin>
  );
}

export default Products;
