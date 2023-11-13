import { StyledFilterSectionContent } from "./FilterSectionContent.style";
import searchIcon from "../../assets/images/search-logo.svg";
import filterLogo from "../../assets/images/filter-logo.svg";
import clrFilterLogo from "../../assets/images/clear-filter.svg";
import Button from "../button/Button";
import InputField from "../inputField/InputField";
import { useState } from "react";
import { testData } from "../../core/config/testData";

let initialSkillCheck = [
  { id: "React", isCheck: false },
  { id: "React Native", isCheck: false },
  { id: "Angular", isCheck: false },
  { id: "Node", isCheck: false },
  { id: "HTML/CSS", isCheck: false },
];

export default function FilterSectionContent() {
  const [check, setCheck] = useState(initialSkillCheck);

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
  return (
    <StyledFilterSectionContent>
      <form className="search-box">
        <InputField
          type="text"
          placeholder="Search by Name..."
          src={searchIcon}
          alt="search-icon"
        />
      </form>
      <div className="filter-section">
        <div className="filter-section-heading">
          <p>Filter by Skill</p>
          <img src={filterLogo} alt="logo for the filter" />
        </div>
        <div className="filter-search">
          <form>
            <InputField type="text" placeholder="Search Skill" />
          </form>
          <Button
            onClick={handleClearFilter}
            src={clrFilterLogo}
            alt="clear-filter-log"
          />
        </div>
        <div className="skill-list">
          {testData.skill.map((item) => (
            <div
              onClick={() => handleSkillClick(item.skill)}
              key={item.id}
              className="skill-element"
            >
              <input
                type="checkbox"
                checked={check.find((each) => each.id === item.skill)?.isCheck}
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
