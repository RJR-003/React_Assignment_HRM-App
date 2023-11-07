import { StyledTableContent } from "./TableContent.styled";
import addEmpicon from "../../assets/images/add-employee.svg";
import upArrow from "../../assets/images/up-arrow.svg";
import viewImgIcon from "../../assets/images/view-img.svg";
import editImgIcon from "../../assets/images/edit-img.svg";
import delImgIcon from "../../assets/images/del-img.svg";
import Button from "../button/Button";
import { Link } from "react-router-dom";

type tempdata = {
  id: number;
  name: string;
  email: string;
  department: string;
};

const tempData: tempdata[] = [
  {
    id: 1001,
    name: "John",
    email: "john@gmail.com",
    department: "Development",
  },
  {
    id: 1002,
    name: "Billy",
    email: "billy@gmail.com",
    department: "Development",
  },
  {
    id: 1003,
    name: "Geralt",
    email: "geralt@gmail.com",
    department: "Development",
  },
  {
    id: 1004,
    name: "Walter",
    email: "walter@gmail.com",
    department: "Development",
  },
];

export default function TableContent() {
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
          {tempData.map((item) => (
            <tr key={item.id} className="heading-row">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.department}</td>
              <td id="action-button-cell">
                <Link to="/view-employee">
                  <Button src={viewImgIcon} alt="view button image" />
                </Link>
                <Link to="/update-employee">
                  <Button src={editImgIcon} alt="Edit button image" />
                </Link>
                <Button src={delImgIcon} alt="Delete button image" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableContent>
  );
}
