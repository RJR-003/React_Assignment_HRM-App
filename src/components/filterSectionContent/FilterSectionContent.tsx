import { StyledFilterSectionContent } from "./FilterSectionContent.style";
import searchIcon from "../../assets/images/search-logo.svg";
import filterLogo from "../../assets/images/filter-logo.svg";
import clrFilterLogo from "../../assets/images/clear-filter.svg";
import Button from "../button/Button";
import InputField from "../inputField/InputField";
let tempSkills: string[] = [
  "React",
  "React Native",
  "Angular",
  "Node",
  "HTML/CSS",
];

export default function FilterSectionContent() {
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
            onClick={() => console.log("function yet to be done")}
            src={clrFilterLogo}
            alt="clear-filter-log"
          />
        </div>
        <div className="skill-list">
          {tempSkills.map((item) => (
            <div key={item} className="skill-element">
              <input type="checkbox" />
              <label>{item}</label>
            </div>
          ))}
        </div>
      </div>
    </StyledFilterSectionContent>
  );
}
