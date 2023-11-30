import { useEffect, useState } from "react";
import { useEmployeeContext } from "../../core/context/EmployeeLIstContext";
import { constants } from "../../core/config/constants";
import nextPage from "../../assets/images/next-page-icon.svg";
import nextPageDisabled from "../../assets/images/next-page-disabled.svg";
import prevPage from "../../assets/images/prev-page-icon.svg";
import prevPageDisabled from "../../assets/images/prev-page-diabled-icon.svg";
import skipNextPage from "../../assets/images/skip-next-icon.svg";
import skipNextPageDisabled from "../../assets/images/skip-next-icon-disabled.svg";
import skipPrevPage from "../../assets/images/skip-prev-icon.svg";
import skipPrevPageDisabled from "../../assets/images/skip-prev-icon-disabled.svg";
import InputField from "../../components/inputField/InputField";
import { useSearchParams } from "react-router-dom";

export default function PaginationContainer() {
  const [paginationInput, setPaginationInput] = useState<string>("1");
  const { empCount } = useEmployeeContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const paginationInputNum = Number(paginationInput);

  let totalPages: number;
  if (empCount !== 0) {
    totalPages = Math.ceil(empCount! / Number(constants.pageLimit));
  } else totalPages = 1;
  // if(paginationInput>empCount)

  function updateSearchParams(params: { offset?: string; page?: string }) {
    setSearchParams!({
      ...Object.fromEntries(searchParams!.entries()),
      ...params,
    });
  }

  function handleNextClick() {
    setPaginationInput(String(paginationInputNum + 1));
    let currPage = searchParams?.get("page");
    let pageParam = String(Number(currPage) + 1);
    handlePagination(pageParam);
  }
  function handlePrevClick() {
    setPaginationInput(String(paginationInputNum - 1));
    let currPage = searchParams?.get("page");
    let pageParam = String(Number(currPage) - 1);
    handlePagination(pageParam);
  }
  function handlePagination(pageParam: string) {
    let page = Number(searchParams?.get("page"));
    console.log("hi");
    let offset = Number(constants.pageLimit) * (page - 1);
    const params = {
      offset: String(offset),
      page: pageParam,
    };
    updateSearchParams(params);
  }
  function handleSkipNext() {
    setPaginationInput(String(totalPages));
    updateSearchParams({ page: String(totalPages) });
  }
  function handleSkipBefore() {
    setPaginationInput("1");
    updateSearchParams({ page: "1" });
  }

  useEffect(() => {
    let currPage = searchParams?.get("page")!;
    setPaginationInput(currPage);
  }, [searchParams]);
  let isDisablednext = false;
  let isDisabledprev = false;
  if (paginationInput === String(totalPages)) {
    isDisablednext = true;
  }
  if (paginationInput === "1") {
    isDisabledprev = true;
  }
  return (
    <div className="pagination-container">
      <figure>
        {isDisabledprev ? (
          <img src={skipPrevPageDisabled} alt="skip to first page button" />
        ) : (
          <img
            onClick={handleSkipBefore}
            src={skipPrevPage}
            alt="skip to first page button"
          />
        )}
      </figure>
      <figure>
        {isDisabledprev ? (
          <img src={prevPageDisabled} alt="prev page button" />
        ) : (
          <img
            onClick={handlePrevClick}
            src={prevPage}
            alt="prev page button"
          />
        )}
      </figure>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isNaN(Number(paginationInput))) {
            setPaginationInput("1");
          } else if (Number(paginationInput) > totalPages) {
            setPaginationInput(String(totalPages));
            updateSearchParams({ page: String(totalPages) });
          } else updateSearchParams({ page: paginationInput });
        }}
      >
        <InputField
          type="text"
          value={paginationInput}
          onChange={(e) => {
            let target = e.target as HTMLInputElement;

            setPaginationInput(target.value);
          }}
        />
      </form>

      <figure>
        {isDisablednext ? (
          <img src={nextPageDisabled} alt="next page button" />
        ) : (
          <img
            onClick={handleNextClick}
            src={nextPage}
            alt="next page button"
          />
        )}
      </figure>
      <figure>
        {isDisablednext ? (
          <img src={skipNextPageDisabled} alt="skip to last page button" />
        ) : (
          <img
            onClick={handleSkipNext}
            src={skipNextPage}
            alt="skip to last page button"
          />
        )}
      </figure>
    </div>
  );
}
