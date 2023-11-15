import { StyledFilterSectionContent } from "./FilterSectionContent.style";
import searchIcon from "../../assets/images/search-logo.svg";
import filterLogo from "../../assets/images/filter-logo.svg";
import clrFilterLogo from "../../assets/images/clear-filter.svg";
import Button from "../button/Button";
import InputField from "../inputField/InputField";
import { testData } from "../../core/config/testData";
import { filterSectionContentProps } from "../../core/config/type";
import { ChangeEvent, useState } from "react";

export default function FilterSectionContent({
  SearchFun,
  clearFun,
  skillClickFun,
  checkObj,
}: filterSectionContentProps) {
  const [renderSkillList, setRenderSkillList] = useState(testData.skill);

  function handleSkillSearch(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    let searchVal = target.value;
    let tempArr = testData.skill;
    if (searchVal != "") {
      tempArr = tempArr?.filter((item) =>
        item.skill.toLowerCase().includes(searchVal.toLowerCase())
      );
    }
    setRenderSkillList([...tempArr!]);
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
            />
          </form>
          <Button
            onClick={clearFun}
            src={clrFilterLogo}
            alt="clear-filter-log"
          />
        </div>
        <div className="skill-list">
          {renderSkillList?.map((item) => (
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
          ))}
        </div>
      </div>
    </StyledFilterSectionContent>
  );
}
