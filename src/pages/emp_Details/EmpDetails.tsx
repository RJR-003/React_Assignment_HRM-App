import { StyledViewPage } from "./EmpDetails.style";
import testPhoto from "../../assets/images/person1.jpeg";

export default function EmpDetails() {
  return (
    <StyledViewPage>
      <div className="data-view-content">
        <figure>
          <img className="img" src={testPhoto} alt="profile-pic" />
        </figure>

        <div className="left-view-content">
          <div>
            <p className="view-labels">Employee ID:</p>
            <p className="view-labels">Name: </p>
            <p className="view-labels">E-mail: </p>
            <p className="view-labels">Date Of Join: </p>
            <p className="view-labels">Date of Birth: </p>
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
              <p className="view-labels">Department:</p>
              <p className="view-labels">Role: </p>
              <p className="view-labels">Location: </p>
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
