import React, { useEffect, useState, useMemo } from "react";
import "./ProductList.scss";
import HeaderCustomer from "../../../../components/HeaderCustomer/HeaderCustomer";
import Admin from "../../../Admin";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { getListBooth } from "../../../../api";
import dayjs from "dayjs";
import Pagination from "../../../../components/Pagination/Pagination";

const PageSize = 10;

function ProductList() {
  const [booths, setBooths] = useState(null);
  
  const [search, setSearch] = useState("");

  const fechBooths = async () => {
    try {
      const res = await getListBooth();
      setBooths(res?.booths);
    } catch (error) {
      console.log(error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    let newList = booths?.filter(
      (item) => item.name.toLowerCase().includes(search.toLowerCase())
    );
    return newList?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, booths, search]);

  useEffect(() => {
    fechBooths();
  }, []);

  return (
    <Admin>
      <div className="ProductList">
        <div className="list__center">
          <div className="list__table">
            <div className="table__center">
              <HeaderCustomer
                title="booth list"
                icon={"fas fa-plus"}
                text="New booth"
              />
              <div className="table__input">
                <div className="input__top">
                  <div className="SearchCustomer">
                    <div className="search__center">
                      <div className="search__top">
                        <div className="input">
                          <span>
                            <i class="fas fa-search"></i>
                          </span>
                          <input
                            className="in"
                            placeholder="Search booths..."
                            type="text"
                            onChange={(e) =>setSearch(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table">
                <table>
                  <tr>
                    <th className="check">
                      <input type="checkbox" />
                    </th>
                    <th className="Avatar">
                      <span>Avatar</span>
                    </th>
                    <th className="name">
                      <span>Name</span>
                    </th>
                    <th className="Details">
                      <span>Address</span>
                    </th>
                    <th className="Attributes">
                      <span>Total order</span>
                    </th>
                    <th className="Price">
                      <span>Updated at</span>
                    </th>
                    <th className="Actions">
                      <span>Actions</span>
                    </th>
                  </tr>
                  {currentTableData?.map((item, index) => (
                    <tr key={index}>
                      <td className="check">
                        <input className="check" type="checkbox" />
                      </td>
                      <td className="Avatar">
                        <img src={item?.images[0]?.link} alt="" />
                      </td>
                      <td className="name">
                        <span>{item?.name}</span>
                      </td>
                      <td className="Details">
                        <span className="">{item?.address}</span>
                      </td>
                      <td className="Attributes">
                        <span>{item?.total_orders}</span>
                      </td>
                      <td className="Price">
                        <span>
                          {dayjs(item?.updated_at).isValid()
                            ? dayjs(item?.updated_at).format("YYYY.MM.DD")
                            : "-"}
                          {}
                        </span>
                      </td>
                      <td className="Actions">
                        <DeleteIcon
                          style={{
                            marginRight: "15px",
                            color: "red",
                            cursor: "pointer",
                          }}
                        />
                        <EditIcon
                          style={{ color: "#4CAF50", cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  ))}
                </table>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Admin>
  );
}

export default ProductList;
