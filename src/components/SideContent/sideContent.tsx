import { StyledSideContent } from "./sideContent.styled";
import searchIcon from "../../assets/images/search-logo.svg";
import filterLogo from "../../assets/images/filter-logo.svg";
import clrFilterLogo from "../../assets/images/clear-filter.svg";

export default function SideContent() {
  return (
    <StyledSideContent>
      <form className="search-box">
        <input
          className="search-input-box"
          type="text"
          placeholder="Search by Name..."
        />
        <img src={searchIcon} alt="search icon" />
      </form>
      <div className="filter-section">
        <div className="filter-section-heading">
          <p>Filter by Skill</p>
          <img src={filterLogo} alt="logo for the filter" />
        </div>
        <div className="filter-search">
          <form>
            <input
              className="filter-search-box"
              type="text"
              placeholder="Search Skill"
            />
          </form>
          <button>
            <img
              className="clear-filter-button"
              src={clrFilterLogo}
              alt="clear-filter-logo "
            />
          </button>
        </div>
        <div className="skill-list">
          <div className="skill-element">
            <input type="checkbox" />
            <label>React</label>
          </div>
          <div className="skill-element">
            <input type="checkbox" />
            <label>React Native</label>
          </div>
          <div className="skill-element">
            <input type="checkbox" />
            <label>Angular</label>
          </div>
          <div className="skill-element">
            <input type="checkbox" />
            <label>Node</label>
          </div>
          <div className="skill-element">
            <input type="checkbox" />
            <label>HTML/CSS</label>
          </div>
        </div>
      </div>
    </StyledSideContent>
  );
}
