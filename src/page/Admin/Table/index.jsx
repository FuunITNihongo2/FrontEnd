import React from "react";
import "./styles.css";
import HeaderCustomer from "../../../components/HeaderCustomer/HeaderCustomer";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import dayjs from "dayjs";

function ProductList({ onSearch, currentTableData, onDeleteOpen, onEditOpen, onAddOpen }) {
  return (
    <div className="ProductList">
      <div className="list__center">
        <div className="list__table">
          <div className="table__center">
            <HeaderCustomer
              title="booth list"
              icon={"fas fa-plus"}
              text="New booth"
              onShow={onAddOpen}
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
                          onChange={(e) => onSearch(e.target.value)}
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
                        onClick={() => onDeleteOpen(item?.id)}
                        style={{
                          marginRight: "15px",
                          color: "red",
                          cursor: "pointer",
                        }}
                      />
                      <EditIcon
                        onClick={() => onEditOpen(item)}
                        style={{ color: "#4CAF50", cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
