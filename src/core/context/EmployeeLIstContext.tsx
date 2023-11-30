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
  loadingType,
} from "../config/type";
import { employeeList } from "../config/type";
import { constants } from "../config/constants";
import useAxios, { getData } from "../axios/axios";
import { useLocation, useSearchParams } from "react-router-dom";

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
const initialLoadingState: loadingType = {
  empLoading: true,
};

export function EmployeeProvider({ children }: { children: ReactNode }) {
  const [empObj, setEmpObj] = useState(employeeData);
  const [skillObj, setSkillObj] = useState<ApiGetSkillData[]>([]);
  const [initialEmpData, setInitialEmpData] = useState<ApiGetEmpData[]>(empObj);
  const [renderSkillList, setRenderSkillList] = useState<ApiGetSkillData[]>([]);
  const [deptObj, setDeptObj] = useState<ApiGetDeptData[]>([]);
  const [roleObj, setRoleObj] = useState<ApiGetRoleData[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loadingState, setloadingState] = useState(initialLoadingState);
  const [empCount, setEmpCount] = useState(0);
  const navigation = useLocation();

  const setLoadState = (obj: loadingType) => {
    setloadingState(obj);
  };

  const {
    response: deptGetResponse,
    loading: deptGetLoading,
    error: deptGetError,
  } = useAxios({
    method: "get",
    url: constants.getDeptUrl,
  });
  const {
    response: roleGetResponse,
    loading: roleGetLoading,
    error: roleGetError,
  } = useAxios({
    method: "get",
    url: constants.getRoleUrl,
  });

  useEffect(() => {
    if (deptGetResponse !== null) {
      setDeptObj(deptGetResponse);
    }
    if (roleGetResponse !== null) {
      setRoleObj(roleGetResponse);
    }
  }, [deptGetResponse, roleGetResponse]);

  const setEmployeeObj = (arr: ApiGetEmpData[]) => {
    setEmpObj([...arr]);
  };
  const setInitialEmployeeData = (arr: ApiGetEmpData[]) => {
    setInitialEmpData([...arr]);
  };
  const setSkillList = (arr: ApiGetSkillData[]) => {
    setRenderSkillList(arr);
  };
  function updateSearchParams(params: { offset: string; page: string }) {
    setSearchParams!({
      ...Object.fromEntries(searchParams!.entries()),
      ...params,
    });
  }

  const fetchEmpData = async () => {
    const navStat = navigation.pathname.split("/")[1];
    if (
      navStat !== "view-employee" &&
      navStat !== "add-employee" &&
      navStat !== "update-employee"
    ) {
      let currPage = searchParams.get("page") || "1";
      let ascSorty = searchParams.get("sortDir") || "asc";
      if (ascSorty !== "asc" && ascSorty !== "desc") {
        ascSorty = "asc";
      }
      if (Number(currPage) < 1) {
        currPage = "1";
      }

      setLoadState({ empLoading: true });
      let offset = Number(constants.pageLimit) * (Number(currPage) - 1);
      const params = {
        offset: String(offset),
        page: String(currPage),
        sortDir: ascSorty,
      };
      updateSearchParams(params);

      try {
        const res = await getData(
          `${constants.getPostEmpUrl}?limit=${constants.pageLimit}&offset=${offset}&sortBy=firstName&sortDir=${ascSorty}`
        );
        console.log(res.data.data.employees, "response of get after updating");
        setEmployeeObj!(res.data.data.employees);
        setInitialEmployeeData!(res.data.data.employees);
        setEmpCount(res.data.data.count);
      } catch (err) {
        setLoadState({ empLoading: false });
        console.log("error while fetching employee for table", err);
      }
    }
  };
  useEffect(() => {
    fetchEmpData();
  }, [searchParams]);

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
    renderSkillList,
    setSkillList,
    deptObj,
    roleObj,
    setInitialEmployeeData,
    loadingState,
    setLoadState,
    empCount,
    deptGetLoading,
    deptGetError,
    roleGetError,
    roleGetLoading,
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
