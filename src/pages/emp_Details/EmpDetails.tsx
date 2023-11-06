import { StyledViewPage } from "./EmpDetails.style";
import testPhoto from "../../assets/images/person1.jpeg";

export default function EmpDetails() {
  const leftViewContent: string[] = [
    "Employee ID:",
    "Name:",
    "E-mail:",
    "Date of Join",
    "Date of Birth: ",
  ];
  const rightViewContent: string[] = ["Department", "Role", "Location"];

  return (
    <StyledViewPage>
      <div className="data-view-content">
        <figure>
          <img className="img" src={testPhoto} alt="profile-pic" />
        </figure>

        <div className="left-view-content">
          <div>
            {leftViewContent.map((item) => (
              <p className="view-labels">{item}</p>
            ))}
          </div>
          <div>
            <p id="empIdView"></p>
            <p id="nameView"></p>
            <p id="emailView"></p>
            <p id="dojView"></p>
            <p id="dobView"></p>
          </div>
        </div>
        <div className="right-view-content">
          <div className="right-content">
            <div>
              {rightViewContent.map((item) => (
                <p className="view-labels">{item}</p>
              ))}
            </div>
            <div>
              <p id="depView"></p>
              <p id="roleView"></p>
              <p id="locView"></p>
            </div>
          </div>
          <div className="view-skill-sec">
            <p className="view-labels">Skills</p>
            <div className="view-skill-box"></div>
          </div>
        </div>
      </div>
    </StyledViewPage>
  );
}
