import FilterSectionContent from "../../components/filterSectionContent/FilterSectionContent";
import TableContent from "../../components/tableContent/TableContent";
import { StyledHome } from "./Home.styled";
import { useState, useEffect, ChangeEvent } from "react";
import { useEmployeeContext } from "../../core/context/EmployeeLIstContext";
import { testData } from "../../core/config/testData";
import { dataBaseData } from "../../core/config/type";
import sortFun from "./sortFun";

let initialSkillCheck = [
  { id: "React", isCheck: false },
  { id: "React Native", isCheck: false },
  { id: "Angular", isCheck: false },
  { id: "Node", isCheck: false },
  { id: "HTML/CSS", isCheck: false },
];

export default function Home() {
  const [check, setCheck] = useState(initialSkillCheck);
  const [searchInput, setSearchInput] = useState("");
  const { empObj, setEmployeeArr } = useEmployeeContext();
  const [ascSort, setAscSort] = useState(true);

  let checkObj = {
    check,
    setCheck,
  };
  let sortObj = {
    ascSort,
    setAscSort,
  };

  useEffect(() => {
    let tempCheck = check;
    let checkedSkills = tempCheck
      .filter((item) => item.isCheck === true)
      .map((item) => item.id);

    let filteredEmployee = testData.employee!;

    if (checkedSkills.length !== 0) {
      filteredEmployee = filteredEmployee.filter((employee) =>
        checkedSkills.every((skill) => employee.skills.includes(skill))
      );
    }

    if (searchInput !== "") {
      filteredEmployee = filteredEmployee.filter((item) =>
        item.fullName.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    let dirFlag = 1;
    if (!ascSort) {
      dirFlag = -1;
    }
    filteredEmployee = sortFun(filteredEmployee, dirFlag)!;

    let changedObj: dataBaseData = {
      ...empObj,
      employee: filteredEmployee!,
    };
    if (
      checkedSkills.length == 0 &&
      filteredEmployee?.length === 0 &&
      searchInput === ""
    ) {
      changedObj = testData;
    }
    setEmployeeArr!(changedObj);
  }, [check, searchInput, ascSort]);

  function handleSkillClick(skill: string) {
    initialSkillCheck = initialSkillCheck.map((item) => {
      if (item.id === skill) return { ...item, isCheck: !item.isCheck };
      return item;
    });
    setCheck(initialSkillCheck);
  }

  function handleClearFilter() {
    initialSkillCheck = initialSkillCheck.map((item) => {
      return { ...item, isCheck: false };
    });
    setCheck(initialSkillCheck);
  }

  function handleSearchInput(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    let searchVal = target.value;
    setSearchInput(searchVal.toLowerCase());
  }

  return (
    <StyledHome>
      <FilterSectionContent
        SearchFun={handleSearchInput}
        clearFun={handleClearFilter}
        skillClickFun={handleSkillClick}
        checkObj={checkObj}
      />
      <TableContent sortObj={sortObj} />
    </StyledHome>
  );
}
