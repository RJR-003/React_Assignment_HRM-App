import { StyledTableContent } from "./TableContent.styled";
import addEmpicon from "../../assets/images/add-employee.svg";
import upArrow from "../../assets/images/up-arrow.svg";
import downArrow from "../../assets/images/down-arrow.svg";
import viewImgIcon from "../../assets/images/view-img.svg";
import editImgIcon from "../../assets/images/edit-img.svg";
import delImgIcon from "../../assets/images/del-img.svg";
import Button from "../button/Button";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteModal from "../deleteModal/DeleteModal";
import { useEmployeeContext } from "../../core/context/EmployeeLIstContext";
import { deleteData, getData } from "../../core/axios/axios";
import { constants } from "../../core/config/constants";
import { toast } from "react-toastify";
import PaginationContainer from "../paginationContent/PaginationContainer";

export default function TableContent() {
  const [idToDel, setIdToDel] = useState("");
  const [ascSort, setAscSort] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setEmployeeObj, setInitialEmployeeData, empObj, loadingState } =
    useEmployeeContext();
  const navigate = useNavigate();

  useEffect(() => {
    let sortDirection = searchParams.get("sortDir");
    if (sortDirection === "asc") {
      setAscSort(true);
    } else if (sortDirection === "desc") {
      setAscSort(false);
    }
  }, [searchParams]);

  function updateSearchParams(params: {
    offset?: string;
    page?: string;
    sortDir?: string;
  }) {
    setSearchParams!({
      ...Object.fromEntries(searchParams!.entries()),
      ...params,
    });
  }
  function handleDelClick(id: string) {
    setIdToDel(id);
  }
  const fetchEmpData = async (url: string) => {
    try {
      const res = await getData(url);
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
      fetchEmpData(constants.getPostEmpUrl);
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

  function handleSortFun() {
    let tempDir = ascSort ? "desc" : "asc";
    updateSearchParams({ sortDir: tempDir });
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
                  src={ascSort ? downArrow : upArrow}
                  alt="arrow"
                />
              </th>
              <th>E-mail</th>
              <th>Department</th>
              <th id="last-heading">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loadingState?.empLoading ? (
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
        <PaginationContainer />
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
