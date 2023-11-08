import { StyledTableContent } from "./TableContent.styled";
import addEmpicon from "../../assets/images/add-employee.svg";
import upArrow from "../../assets/images/up-arrow.svg";
import viewImgIcon from "../../assets/images/view-img.svg";
import editImgIcon from "../../assets/images/edit-img.svg";
import delImgIcon from "../../assets/images/del-img.svg";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { testData } from "../../core/config/testData";

export default function TableContent() {
  function handleViewClick(id: number) {
    console.log(id);
  }

  return (
    <StyledTableContent>
      <Link to="/add-employee">
        <Button src={addEmpicon} alt="button for adding new employee " />
      </Link>
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
        <tbody>
          {testData.employee.length != 0 ? (
            testData.employee.map((item) => (
              <tr key={item.id} className="data-row">
                <td>{item.id}</td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.department}</td>
                <td id="action-button-cell">
                  <Link to={`/view-employee/${item.id}`}>
                    <Button
                      src={viewImgIcon}
                      onClick={() => handleViewClick(item.id)}
                      alt="view button image"
                    />
                  </Link>
                  <Link to="/update-employee">
                    <Button src={editImgIcon} alt="Edit button image" />
                  </Link>
                  <Button src={delImgIcon} alt="Delete button image" />
                </td>
              </tr>
            ))
          ) : (
            <tr className="data-row">
              <td colSpan={5}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </StyledTableContent>
  );
}
