import { StyledViewPage } from "./EmpDetails.style";
import SkillChip from "../../components/skillChip/SkillChip";
import { useLocation } from "react-router-dom";
import { ApiGetEmpData } from "../../core/config/type";
import useAxios from "../../core/axios/axios";
import { constants } from "../../core/config/constants";
import { useEffect, useState } from "react";
import defaultImg from "../../assets/images/profile.png";

export default function EmpDetails() {
  const [viewData, setViewData] = useState<ApiGetEmpData>();

  const navigation = useLocation();

  const currId = navigation.pathname.split("/")[2];
  // const currData: employee = testData.employee?.find(
  //   (item) => item.id == Number(currId)
  // )!;

  const currEmp = useAxios({
    method: "get",
    url: `${constants.getPostEmpUrl}/${currId}`,
  });

  useEffect(() => {
    if (currEmp.response !== null) {
      console.log("currEmp.response", currEmp.response.data);
      setViewData(currEmp.response.data);
    }
  }, [currEmp.response]);

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
      {currEmp.loading ? (
        <div>loading...</div>
      ) : (
        <div className="data-view-content">
          <figure>
            <img className="img" src={defaultImg} alt="profile-pic" />
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
              <p id="empIdView">{viewData?.id}</p>
              <p id="nameView">{viewData?.firstName}</p>
              <p id="emailView">{viewData?.email}</p>
              <p id="dojView">{viewData?.dateOfJoining}</p>
              <p id="dobView">{viewData?.dob}</p>
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
                <p id="depView">
                  {viewData?.department
                    ? viewData.department.department
                    : "N/A"}
                </p>
                <p id="roleView">
                  {viewData?.role ? viewData?.role.role : "N/A"}
                </p>
                <p id="locView">Trivandrum</p>
              </div>
            </div>
            <div className="view-skill-sec">
              <p className="view-labels">Skills</p>
              <div className="view-skill-box">
                {viewData?.skills.map((item) => (
                  <SkillChip key={item.id} label={item.skill} isView={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledViewPage>
  );
}
