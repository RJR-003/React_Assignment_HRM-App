import FilterSectionContent from "../../components/filterSectionContent/FilterSectionContent";
import TableContent from "../../components/tableContent/TableContent";
import { StyledHome } from "./Home.styled";
import { useState, useEffect, ChangeEvent } from "react";
import { useEmployeeContext } from "../../core/context/EmployeeLIstContext";
import { ApiGetEmpData } from "../../core/config/type";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const { setEmployeeObj, initialEmpData, setLoadState } = useEmployeeContext();

  const { skillObj } = useEmployeeContext();
  let initialSkillCheck: { id: string; isCheck: boolean }[] = [];
  skillObj?.forEach((elem) => {
    let tempObj: { id: string; isCheck: boolean } = {
      id: `${elem.skill}`,
      isCheck: false,
    };
    initialSkillCheck.push(tempObj);
  });
  console.log(searchInput, "searchInput");
  const [check, setCheck] = useState(initialSkillCheck);
  useEffect(() => {
    setCheck(initialSkillCheck);
  }, [skillObj]);

  let checkObj = {
    check,
    setCheck,
  };

  useEffect(() => {
    console.log("inside use Effect of home");
    let tempCheck = check;
    let checkedSkills = tempCheck
      .filter((item) => item.isCheck === true)
      .map((item) => item.id);

    let filteredEmployee = initialEmpData!;

    if (checkedSkills.length !== 0) {
      filteredEmployee = filteredEmployee.filter((employee) => {
        let skillArr = employee.skills.map((each) => each.skill);
        return checkedSkills.every((skill) => skillArr.includes(skill));
      });
    }

    if (searchInput !== "") {
      filteredEmployee = filteredEmployee.filter((item) => {
        let fullName = item.firstName + " " + item.lastName;
        return fullName.toLowerCase().includes(searchInput.toLowerCase());
      });
    }

    let changedArr: ApiGetEmpData[] = [...filteredEmployee];
    if (
      checkedSkills.length == 0 &&
      filteredEmployee?.length === 0 &&
      searchInput === ""
    ) {
      changedArr = initialEmpData!;
    }
    console.log(changedArr, "changedArray inside useEffect");
    setEmployeeObj!(changedArr);
    setLoadState!({ empLoading: false });
  }, [check, searchInput, initialEmpData]);

  function handleSkillClick(skill: string) {
    initialSkillCheck = check.map((item) => {
      if (item.id === skill) {
        return { ...item, isCheck: !item.isCheck };
      }
      return item;
    });
    setCheck(initialSkillCheck);
  }

  function handleClearFilter() {
    initialSkillCheck = check.map((item) => {
      return { ...item, isCheck: false };
    });
    setCheck(initialSkillCheck);
  }

  function handleSearchInput(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    let searchVal = target.value;
    setSearchInput(searchVal);
  }
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <StyledHome>
        <FilterSectionContent
          SearchFun={handleSearchInput}
          clearFun={handleClearFilter}
          skillClickFun={handleSkillClick}
          checkObj={checkObj}
          searchValue={searchInput}
        />
        <TableContent />
      </StyledHome>
    </>
  );
}
