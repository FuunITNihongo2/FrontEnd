import React, { useEffect, useState, useMemo } from "react";
import Admin from "../../Admin";
import { getListBooth, deleteBooth, editBooth, addBooth } from "../../../api";
import Pagination from "../../../components/Pagination/Pagination";
import ProductList from "./Table";
import EditForm from "./EditForm";

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

function Booths() {
  
  const [booths, setBooths] = useState(null);
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

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

  const [itemActive, setItemActive] = useState({
    name: "",
    address: "",
  });

  const [search, setSearch] = useState("");

  const handleDeleteOpen = (item) => {
    onDeleteOpen();
    setItemActive(item);
  };

  const handleEditOpen = (item) => {
    onEditOpen();
    setItemActive(item);
  };

  const fechBooths = async () => {
    try {
      const res = await getListBooth();
      setBooths(res?.booths);
      onDeleteClose();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBooths = async () => {
    try {
      await deleteBooth(itemActive.id);
      fechBooths();
      setItemActive({
        name: "",
        address: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBooth = async (values) => {
    try {
      await addBooth(values);
      fechBooths();
      setItemActive({
        name: "",
        address: "",
      });
      onAddClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditBooth = async (values) => {
    try {
      await editBooth(itemActive.id, values);
      fechBooths();
      setItemActive({
        name: "",
        address: "",
      });
      onEditClose();
    } catch (error) {
      console.log(error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    let newList = booths?.filter((item) =>
      item?.name?.toLowerCase().includes(search.toLowerCase())
    );
    return newList?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, booths, search]);

  useEffect(() => {
    fechBooths();
  }, []);

  return (
    <Admin>
      <ProductList
        currentTableData={currentTableData}
        onSearch={(value) => setSearch(value)}
        onDeleteOpen={handleDeleteOpen}
        onEditOpen={handleEditOpen}
        onAddOpen={onAddOpen}
        title="Booth list"
        addtext = "New booth"
      />
      <div className="center">
        {booths && (
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={booths?.length}
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

export default Booths;
