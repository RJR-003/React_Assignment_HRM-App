import { StyledViewPage } from "./EmpDetails.style";
import SkillChip from "../../components/skillChip/SkillChip";
import { testData } from "../../core/config/testData";
import { useLocation } from "react-router-dom";
import { employee } from "../../core/config/type";

export default function EmpDetails() {
  // const [data, setData] = useState({ testData });

  const navigation = useLocation();

  const currId = navigation.pathname.split("/")[2];
  const currData: employee = testData.employee.find(
    (item) => item.id == Number(currId)
  )!;
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
          <img className="img" src={currData.imageSrc} alt="profile-pic" />
        </figure>

        <div className="left-view-content">
          <div>
            {leftViewContent.map((item) => (
              <p key={item} className="view-labels">
                {item}
              </p>
            ))}
          </div>
          <div>
            <p id="empIdView">{currData.id}</p>
            <p id="nameView">{currData.fullName}</p>
            <p id="emailView">{currData.email}</p>
            <p id="dojView">{currData.dateOfJoin}</p>
            <p id="dobView">{currData.dateOfBirth}</p>
          </div>
        </div>
        <div className="right-view-content">
          <div className="right-content">
            <div>
              {rightViewContent.map((item) => (
                <p key={item} className="view-labels">
                  {item}
                </p>
              ))}
            </div>
            <div>
              <p id="depView">{currData.department}</p>
              <p id="roleView">{currData.role}</p>
              <p id="locView">{currData.location}</p>
            </div>
          </div>
          <div className="view-skill-sec">
            <p className="view-labels">Skills</p>
            <div className="view-skill-box">
              {currData.skills.map((item) => (
                <SkillChip key={item}>{item}</SkillChip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledViewPage>
  );
}
