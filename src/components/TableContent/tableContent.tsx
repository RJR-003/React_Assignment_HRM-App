import { StyledTableContent } from "./tableContentStyled";
import addEmpicon from "../../assets/images/add-employee.svg";
import upArrow from "../../assets/images/up-arrow.svg";
import viewImgIcon from "../../assets/images/view-img.svg";
import editImgIcon from "../../assets/images/edit-img.svg";
import delImgIcon from "../../assets/images/del-img.svg";

export default function TableContent() {
  return (
    <StyledTableContent>
      <button className="add-employee-button">
        <img src={addEmpicon} alt="button for adding new employee" />
      </button>
      <table className="table">
        <thead>
          <tr className="heading-row">
            <th id="first-heading">ID</th>
            <th>
              Name <img className="sort-button" src={upArrow} alt="arrow" />
            </th>
            <th>E-mail</th>
            <th>Department</th>
            <th id="last-heading">Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr className="data-row">
            <td>1001</td>
            <td>John</td>
            <td>john@gmail.com</td>
            <td>Development</td>
            <td id="action-button-cell">
              <button>
                <img
                  className="view-image-icon"
                  src={viewImgIcon}
                  alt="view button image"
                />
              </button>
              <button className="edit-image-icon">
                <img
                  className="edit-image-icon"
                  src={editImgIcon}
                  alt="Edit button image"
                />
              </button>
              <button className="del-image-icon">
                <img
                  className="del-image-icon"
                  src={delImgIcon}
                  alt="Delete button image"
                />
              </button>
            </td>
          </tr>
          <tr className="data-row">
            <td>1002</td>
            <td>Billy</td>
            <td>billy@gmail.com</td>
            <td>Development</td>
            <td id="action-button-cell">
              <button>
                <img
                  className="view-image-icon"
                  src={viewImgIcon}
                  alt="view button image"
                />
              </button>
              <button className="edit-image-icon">
                <img
                  className="edit-image-icon"
                  src={editImgIcon}
                  alt="Edit button image"
                />
              </button>
              <button className="del-image-icon">
                <img
                  className="del-image-icon"
                  src={delImgIcon}
                  alt="Delete button image"
                />
              </button>
            </td>
          </tr>
          <tr className="data-row">
            <td>1003</td>
            <td>Geralt</td>
            <td>geralt@gmail.com</td>
            <td>Development</td>
            <td id="action-button-cell">
              <button>
                <img
                  className="view-image-icon"
                  src={viewImgIcon}
                  alt="view button image"
                />
              </button>
              <button className="edit-image-icon">
                <img
                  className="edit-image-icon"
                  src={editImgIcon}
                  alt="Edit button image"
                />
              </button>
              <button className="del-image-icon">
                <img
                  className="del-image-icon"
                  src={delImgIcon}
                  alt="Delete button image"
                />
              </button>
            </td>
          </tr>
          <tr className="data-row">
            <td>1004</td>
            <td>Walter</td>
            <td>walter@gmail.com</td>
            <td>Development</td>
            <td id="action-button-cell">
              <button>
                <img
                  className="view-image-icon"
                  src={viewImgIcon}
                  alt="view button image"
                />
              </button>
              <button className="edit-image-icon">
                <img
                  className="edit-image-icon"
                  src={editImgIcon}
                  alt="Edit button image"
                />
              </button>
              <button className="del-image-icon">
                <img
                  className="del-image-icon"
                  src={delImgIcon}
                  alt="Delete button image"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTableContent>
  );
}
