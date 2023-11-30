import { StyledFilterSectionContent } from "./FilterSectionContent.style";
import searchIcon from "../../assets/images/search-logo.svg";
import filterLogo from "../../assets/images/filter-logo.svg";
import clrFilterLogo from "../../assets/images/clear-filter.svg";
import Button from "../button/Button";
import InputField from "../inputField/InputField";
import { filterSectionContentProps } from "../../core/config/type";
import { ChangeEvent, useState } from "react";
import { useEmployeeContext } from "../../core/context/EmployeeLIstContext";

export default function FilterSectionContent({
  SearchFun,
  clearFun,
  skillClickFun,
  checkObj,
  searchValue = "",
}: filterSectionContentProps) {
  const { skillObj, skillLoading, renderSkillList, setSkillList } =
    useEmployeeContext();
  const [skillSearchVal, setSkillSearchVal] = useState("");

  function handleSkillSearch(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    let searchVal = target.value;
    setSkillSearchVal(searchVal);
    let tempArr = skillObj;
    if (searchVal != "") {
      tempArr = tempArr?.filter((item) =>
        item.skill.toLowerCase().includes(searchVal.toLowerCase())
      );
    }
    setSkillList!([...tempArr!]);
  }
  function handleClearFilter() {
    setSkillSearchVal("");
    clearFun();
    setSkillList!(skillObj!);
  }
  return (
    <StyledFilterSectionContent>
      <form className="search-box">
        <InputField
          type="text"
          placeholder="Search by Name..."
          src={searchIcon}
          alt="search-icon"
          onChange={SearchFun}
          value={searchValue}
        />
      </form>
      <div className="filter-section">
        <div className="filter-section-heading">
          <p>Filter by Skill</p>
          <img src={filterLogo} alt="logo for the filter" />
        </div>
        <div className="filter-search">
          <form>
            <InputField
              type="text"
              placeholder="Search Skill"
              onChange={handleSkillSearch}
              value={skillSearchVal}
            />
          </form>
          <Button
            onClick={handleClearFilter}
            src={clrFilterLogo}
            alt="clear-filter-log"
          />
        </div>
        <div className="skill-list">
          {skillLoading ? (
            <div className="skill-loader-container">
              <p className="skill-loader">loading...</p>
            </div>
          ) : renderSkillList!.length != 0 ? (
            renderSkillList
              ?.sort((a, b) =>
                a.skill.toLowerCase() === b.skill.toLowerCase()
                  ? 0
                  : a.skill.toLowerCase() > b.skill.toLowerCase()
                  ? 1
                  : -1
              )
              .map((item) => (
                <div
                  onClick={() => skillClickFun(item.skill)}
                  key={item.id}
                  className="skill-element"
                >
                  <input
                    type="checkbox"
                    checked={
                      checkObj.check.find((each: any) => each.id === item.skill)
                        ?.isCheck
                    }
                    readOnly
                  />
                  <label>{item.skill}</label>
                </div>
              ))
          ) : (
            <div className="skill-loader-container">
              <p className="skill-loader">No data</p>
            </div>
          )}
        </div>
      </div>
    </StyledFilterSectionContent>
  );
}
