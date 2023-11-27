import { StyledTableContent } from "./TableContent.styled";
import addEmpicon from "../../assets/images/add-employee.svg";
import upArrow from "../../assets/images/up-arrow.svg";
import downArrow from "../../assets/images/down-arrow.svg";
import viewImgIcon from "../../assets/images/view-img.svg";
import editImgIcon from "../../assets/images/edit-img.svg";
import delImgIcon from "../../assets/images/del-img.svg";
import Button from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "../deleteModal/DeleteModal";
import { tableContentProps } from "../../core/config/type";
import { useEmployeeContext } from "../../core/context/EmployeeLIstContext";
import { deleteData, getData } from "../../core/axios/axios";
import { constants } from "../../core/config/constants";
import { toast } from "react-toastify";

export default function TableContent({ sortObj }: tableContentProps) {
  const [idToDel, setIdToDel] = useState("");
  const { setEmployeeObj, setInitialEmployeeData } = useEmployeeContext();
  const navigate = useNavigate();
  function handleDelClick(id: string) {
    setIdToDel(id);
  }
  const fetchEmpData = async () => {
    try {
      const res = await getData(constants.getPostEmpUrl);
      console.log(res.data.data.employees, "response of get after updating");
      setEmployeeObj!(res.data.data.employees);
      setInitialEmployeeData!(res.data.data.employees);
    } catch (err) {
      console.log("error while fetching employee for table", err);
    }
  };
  const delEmpData = async (id: string) => {
    const delToast = toast.info("Deleting ...", {
      autoClose: false,
      closeButton: false,
      closeOnClick: false,
    });
    try {
      const res = await deleteData(`${constants.getPostEmpUrl}/${id}`);
      console.log(res.data, "response from delete api");
      fetchEmpData();
      toast.update(delToast, {
        render: "Successfully Deleted",
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
        closeButton: true,
        closeOnClick: true,
      });
    } catch (err) {
      console.log("error while deleting", err);
      toast.update(delToast, {
        render: "Error In Deleting..",
        type: toast.TYPE.ERROR,
        autoClose: 5000,
        closeButton: true,
        closeOnClick: true,
      });
    } finally {
      navigate("/");
    }
  };
  function handleConfirmDel(id: string) {
    console.log(`deleted ${id}`);
    delEmpData(id);
    setIdToDel("");
  }
  function handleCancelDel() {
    setIdToDel("");
  }

  const { empObj, empLoading } = useEmployeeContext();

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
            {empLoading ? (
              <tr className="data-row">
                <td colSpan={5}>loading...</td>
              </tr>
            ) : empObj?.length != 0 ? (
              empObj?.map((item) => (
                <tr key={item.id} className="data-row">
                  <td>{item.id}</td>
                  <td>
                    {item.lastName
                      ? item.firstName + " " + item.lastName
                      : item.firstName}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.department ? item.department.department : ""}</td>
                  <td id="action-button-cell">
                    <Link to={`/view-employee/${item.id}`}>
                      <Button
                        onClick={() => console.log("clicked view button")}
                        src={viewImgIcon}
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
