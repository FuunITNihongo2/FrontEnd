import React from "react";
import "./ProductList.scss";
import HeaderCustomer from "../../../../components/HeaderCustomer/HeaderCustomer";
import Admin from "../../../Admin";

function ProductList() {
  return (
    <Admin>
      <div className="ProductList">
        <div className="list__center">

          <div className="list__table">
            <div className="table__center">
            <HeaderCustomer title = "Product list" icon ={'fas fa-plus'} text ="New Product"/>

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
                            placeholder="Search customers"
                            type="text"
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
                    <th className="name">
                      <span>Name</span>
                    </th>

                    <th className="Details">
                      <span>Details</span>
                    </th>
                    <th className="Attributes">
                      <span>Attributes</span>
                    </th>
                    <th className="Price">
                      <span>Price</span>
                    </th>
                    <th className="Actions">
                      <span>Actions</span>
                    </th>
                  </tr>
                  <tr>
                    <td className="check">
                      <input className="check" type="checkbox" />
                    </td>
                    <td className="name">
                      <span>Charlie Tulip Dress</span>
                    </td>
                    <td className="Details">
                      <span className="box">IN STOCK</span>
                    </td>
                    <td className="Attributes">
                      <span>85 in stock in 2 variants</span>
                    </td>
                    <td className="Price">
                      <span>Cotton</span>
                    </td>
                    <td className="Actions">
                      <span className="icon">
                        <i class="fas fa-edit"></i>
                      </span>
                      <span>
                        <i class="fas fa-arrow-right"></i>
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Admin>
  );
}

export default ProductList;
