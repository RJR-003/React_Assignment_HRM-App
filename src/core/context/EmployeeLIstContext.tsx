import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  ApiGetDeptData,
  ApiGetEmpData,
  ApiGetRoleData,
  ApiGetSkillData,
} from "../config/type";
import { employeeList } from "../config/type";
import { constants } from "../config/constants";
import useAxios from "../axios/axios";

export let employeeData = [
  {
    id: 0,
    firstName: "",
    lastName: "",
    isActive: false,
    dob: "",
    email: "",
    phone: "",
    designation: "",
    department: { id: 0, department: "" },
    role: { id: 0, role: "" },
    skills: [{ id: 0, skill: "" }],
    dateOfJoining: "",
    salary: "",
    address: "",
    moreDetails: null,
  },
];
const EmployeeListContext = createContext<employeeList>({ employeeData });

export function EmployeeProvider({ children }: { children: ReactNode }) {
  const [empObj, setEmpObj] = useState(employeeData);
  const [skillObj, setSkillObj] = useState<ApiGetSkillData[]>([]);
  const [initialEmpData, setInitialEmpData] = useState<ApiGetEmpData[]>(empObj);
  const [renderSkillList, setRenderSkillList] = useState<ApiGetSkillData[]>([]);
  const [deptObj, setDeptObj] = useState<ApiGetDeptData[]>([]);
  const [roleObj, setRoleObj] = useState<ApiGetRoleData[]>([]);

  const deptGetData = useAxios({
    method: "get",
    url: constants.getDeptUrl,
  });
  const roleGetData = useAxios({
    method: "get",
    url: constants.getRoleUrl,
  });

  useEffect(() => {
    if (deptGetData.response !== null) {
      setDeptObj(deptGetData.response);
    }
    if (roleGetData.response !== null) {
      setRoleObj(roleGetData.response);
    }
  }, [deptGetData.response, roleGetData.response]);

  const setEmployeeObj = (arr: ApiGetEmpData[]) => {
    setEmpObj([...arr]);
  };
  const setInitialEmployeeData = (arr: ApiGetEmpData[]) => {
    setInitialEmpData([...arr]);
  };
  const setSkillList = (arr: ApiGetSkillData[]) => {
    setRenderSkillList(arr);
  };
  const empGetData = useAxios({
    method: "get",
    url: constants.getPostEmpUrl,
  });

  useEffect(() => {
    if (empGetData.response !== null) {
      setEmployeeObj(empGetData.response.data.employees);
      setInitialEmployeeData(empGetData.response.data.employees);
    }
  }, [empGetData.response]);

  const skillGetData = useAxios({
    method: "get",
    url: constants.getSkillsUrl,
  });
  useEffect(() => {
    if (skillGetData.response !== null) {
      setSkillObj(skillGetData.response.data);
      setRenderSkillList(skillGetData.response.data);
    }
  }, [skillGetData.response]);

  const value: employeeList = {
    skillObj,
    skillLoading: skillGetData.loading,
    initialEmpData,
    empObj,
    setEmployeeObj,
    empLoading: empGetData.loading,
    renderSkillList,
    setSkillList,
    deptObj,
    roleObj,
    setInitialEmployeeData,
  };

  return (
    <EmployeeListContext.Provider value={value}>
      {children}
    </EmployeeListContext.Provider>
  );
}

export function useEmployeeContext() {
  return useContext(EmployeeListContext);
}

export default EmployeeProvider;
