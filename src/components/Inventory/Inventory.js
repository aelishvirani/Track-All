import React from "react";
import "./inventory.css";
import Slider from '../Slider';

function Inventory() {
  return (
    <>
    <Slider/>
      <div className="maindiv">

      <div className="Raw_Items_Stock">Raw Items Stock</div>

{/* Second  div */}
<div className="fourth_divs">
  <div className="">
    <ul className="fourth_divs_navbar pt-3">
      <li className="fourth_divs_navbar_buttons"><a href="/" className="second_divs_navbar_buttons_link">Vegies</a></li>
      <li className="fourth_divs_navbar_buttons"><a href="/" className="second_divs_navbar_buttons_link">Dairy</a></li>
      <li className="fourth_divs_navbar_buttons"><a href="/" className="second_divs_navbar_buttons_link">Fruits</a></li>
      <li className="fourth_divs_navbar_buttons"><a href="/" className="second_divs_navbar_buttons_link">Others</a></li>
    </ul>
    <hr style={{ margin: "0px" }} />
  </div>
  <div className="fourth_divs_searchbox_buttin">
    <div className="container-fluid">
      <form className="d-flex my-2">
        <input
          className="form-control me-2 fourth_divs_search_box "
          type="search"
          placeholder="Search for Item"
        />
        <button className="fourth_divs_search_button btn btn-success" type="submit">
          + Add New Item
        </button>
      </form>
    </div>
  </div>
  <div className="fourth_divs_tabls ">
    <table className="fourth_divs_tabls_one rounded-1 inventorycss">
      <thead>
        <tr className="pS-1">
          <th className="pS-3 tableitem">Item</th>
          <th className="pS-3 ms-3 tableitem">Stock Status</th>
        </tr>
        <tr className="ps-0">
          <td className="ps-0 tdcontent">Potato</td>
          <td className="ms-3 me-0 pe-0 ">
            <p>12kg</p>
          </td>
        </tr>
        <tr className="ps- ">
          <td className="ps-0 ">Ginger</td>
          <td className="ms-3 me-0 pe-0 ">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0 ">
          <td className="ps-0 ">Cabbage</td>
          <td className="ms-3 me-0 pe-0 ">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Carrot</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Capsicum</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Brinjal</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

    <table className="fourth_divs_tabls_one rounded-1 ">
      <thead>
        <tr className="pS-1">
          <th className="pS-3 tableitem">Item</th>
          <th className="pS-3 ms-3 tableitem">Stock Status</th>
        </tr>
        <tr className="ps-0">
          <td className="ps-0">Potato</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr>
        <tr className="ps-0">
          <td className="ps-0">Ginger</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Cabbage</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Carrot</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Capsicum</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Brinjal</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

    <table className="fourth_divs_tabls_one rounded-1 ">
      <thead>
        <tr className="pS-1">
          <th className="pS-3 tableitem">Item</th>
          <th className="pS-3 ms-3 tableitem">Stock Status</th>
        </tr>
        <tr className="ps-0">
          <td className="ps-0">Potato</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr>
        <tr className="ps-0">
          <td className="ps-0">Ginger</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Cabbage</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Carrot</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Capsicum</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr> <tr className="ps-0">
          <td className="ps-0">Brinjal</td>
          <td className="ms-3 me-0 pe-0">
            <p>12kg</p>
          </td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
  <div className="fourth_divs_change_table_buttons">
    <a href="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-chevron-left"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </a>
    <a href="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </a>
  </div>
</div>

        {/* First title div */}
        <div className="Merchandise_Menu">Merchandise Menu</div>

        {/* Second  div */}
        <div className="second_divs">
          <div className="">
            <ul className="second_divs_navbar pt-3">
              <li className="second_divs_navbar_buttons"><a href="/" className="second_divs_navbar_buttons_link">Zomato</a></li>
              <li className="second_divs_navbar_buttons"><a href="/" className="second_divs_navbar_buttons_link">Swiggy</a></li>
              <li className="second_divs_navbar_buttons"><a href="/" className="second_divs_navbar_buttons_link">Uber Eats</a></li>
              <li className="second_divs_navbar_buttons"><a href="/" className="second_divs_navbar_buttons_link">Food Panda</a></li>
            </ul>
            <hr style={{ margin: "0px" }} />
          </div>
          <div className="second_divs_searchbox_buttin">
            <div className="container-fluid">
              <form className="d-flex my-2">
                <input
                  className="form-control me-2 second_divs_search_box "
                  type="search"
                  placeholder="Search for Item"
                />
                <button className="second_divs_search_button btn btn-success" type="submit">
                  + Add New Item
                </button>
              </form>
            </div>
          </div>
          <div className="second_divs_tabls">
            <table className="second_divs_tabls_one">
              <thead>
                <tr className="p-1">
                  <th className="p-1 tableitem">Item</th>
                  <th className="pS-3 tableitem">Stock Status</th>
                </tr>
                <tr className="ps-1">
                  <td className="p-1">Grilled Sandwich</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr className="ps-1">
                  <td className="p-1">Sweet Corn Soup</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Hakka Noodles</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Cheese Soya Chaap</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Choco Dip Sundae</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Chhole Bhature</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr>

              </thead>
              <tbody></tbody>
            </table>
            <table className="second_divs_tabls_one">
              <thead>
                <tr className="p-1">
                  <th className="p-1 tableitem">Item</th>
                  <th className="pS-3 tableitem">Stock Status</th>
                </tr>
                <tr className="ps-1">
                  <td className="p-1">Grilled Sandwich</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr className="ps-1">
                  <td className="p-1">Sweet Corn Soup</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Hakka Noodles</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Cheese Soya Chaap</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Choco Dip Sundae</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Chhole Bhature</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr>

              </thead>
              <tbody></tbody>
            </table><table className="second_divs_tabls_one">
              <thead>
                <tr className="p-1">
                  <th className="p-1 tableitem">Item</th>
                  <th className="pS-3 tableitem">Stock Status</th>
                </tr>
                <tr className="ps-1">
                  <td className="p-1">Grilled Sandwich</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr className="ps-1">
                  <td className="p-1">Sweet Corn Soup</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Hakka Noodles</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Cheese Soya Chaap</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Choco Dip Sundae</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr> <tr className="ps-1">
                  <td className="p-1">Chhole Bhature</td>
                  <td>
                    <div className="form-check form-switch pS-3">
                      <input
                        className="form-check-input border border-success border-2 border border-success border-2"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr>

              </thead>
              <tbody></tbody>
            </table>

          </div>
          <div className="second_divs_change_table_buttons">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </a>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* kbjsfvs vksllv;jsvoisvjbnvmslvheu efv */}

       
      </div>
    </>
  );
}

export default Inventory;
