import { StyledTableContent } from "./TableContent.styled";
import addEmpicon from "../../assets/images/add-employee.svg";
import upArrow from "../../assets/images/up-arrow.svg";
import downArrow from "../../assets/images/down-arrow.svg";
import viewImgIcon from "../../assets/images/view-img.svg";
import editImgIcon from "../../assets/images/edit-img.svg";
import delImgIcon from "../../assets/images/del-img.svg";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "../deleteModal/DeleteModal";
import { useEmployeeContext } from "../../core/context/EmployeeLIstContext";
import { tableContentProps } from "../../core/config/type";

export default function TableContent({ sortObj }: tableContentProps) {
  const [idToDel, setIdToDel] = useState("");
  function handleDelClick(id: string) {
    setIdToDel(id);
  }
  function handleConfirmDel(id: string) {
    console.log(`deleted ${id}`);
    setIdToDel("");
  }
  function handleCancelDel() {
    setIdToDel("");
  }

  const { empObj } = useEmployeeContext();

  function handleSortFun() {
    sortObj.setAscSort(!sortObj.ascSort);
  }

  return (
    <>
      <StyledTableContent>
        <Link to="/add-employee">
          <Button
            onClick={() => console.log("clicked add Employee button")}
            src={addEmpicon}
            alt="button for adding new employee "
          />
        </Link>
        <table className="table">
          <thead>
            <tr className="heading-row">
              <th id="first-heading">ID</th>
              <th>
                Name{" "}
                <img
                  className="sort-button"
                  onClick={handleSortFun}
                  src={sortObj.ascSort ? downArrow : upArrow}
                  alt="arrow"
                />
              </th>
              <th>E-mail</th>
              <th>Department</th>
              <th id="last-heading">Actions</th>
            </tr>
          </thead>
          <tbody>
            {empObj?.employee?.length != 0 ? (
              empObj?.employee?.map((item) => (
                <tr key={item.id} className="data-row">
                  <td>{item.id}</td>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.department}</td>
                  <td id="action-button-cell">
                    <Link to={`/view-employee/${item.id}`}>
                      <Button
                        onClick={() => console.log("clicked view button")}
                        src={viewImgIcon}
                        // onClick={() => handleViewClick(item.id)}
                        alt="view button image"
                      />
                    </Link>
                    <Link to={`/update-employee/${item.id}`}>
                      <Button
                        onClick={() => console.log("clicked edit button")}
                        src={editImgIcon}
                        alt="Edit button image"
                      />
                    </Link>
                    <Button
                      onClick={() => handleDelClick(String(item.id))}
                      src={delImgIcon}
                      alt="Delete button image"
                    />
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
      {idToDel && (
        <DeleteModal
          onDelete={() => handleConfirmDel(idToDel)}
          onCancel={handleCancelDel}
        />
      )}
    </>
  );
}
