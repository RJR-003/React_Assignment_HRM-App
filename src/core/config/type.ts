import { ChangeEvent } from "react";

export type employee = {
  dateOfBirth: string;
  dateOfJoin: string;
  department: string;
  email: string;
  fullName: string;
  id: number;
  role: string;
  skills: string[];
  location: string;
  imageSrc: string;
};

export type dataBaseData = {
  employee?: employee[];
  department?: string[];
  skill?: { id: number; skill: string }[];
  role?: string[];
};
export type initialEmpDetailsType = {
  email: string;
  fullName: string;
  dob: string;
  doj: string;
  role: string;
  Department: string;
  location: string;
  skill: string;
};

export type loadingType = {
  empLoading: boolean;
};
export type employeeList = {
  employeeData?: ApiGetEmpData[];
  empObj?: ApiGetEmpData[];
  setEmployeeObj?: (arr: ApiGetEmpData[]) => void;
  skillLoading?: boolean;
  initialEmpData?: ApiGetEmpData[];
  skillObj?: ApiGetSkillData[];
  renderSkillList?: ApiGetSkillData[];
  setSkillList?: (arr: ApiGetSkillData[]) => void;
  deptObj?: ApiGetDeptData[];
  roleObj?: ApiGetRoleData[];
  setInitialEmployeeData?: (arr: ApiGetEmpData[]) => void;
  loadingState?: { empLoading: boolean };
  setLoadState?: (obj: loadingType) => void;
  empCount?: number;
  ascSort?: boolean;
  setAscSortFun?: (bool: boolean) => void;
  deptGetLoading?: boolean;
  deptGetError?: string;
  roleGetLoading?: boolean;
  roleGetError?: string;
};

export type formValues = {
  email: string;
  fullName: string;
  dob: string;
  doj: string;
  role: string;
  Department: string;
  location: string;
  skill: string;
};
export type returnFormValues = {
  email: string;
  firstName: string;
  dob: string;
  dateOfJoining: string;
  role: number;
  department: number;
  skills: number[];
  moreDetails: string;
};
export type ApiGetEmpData = {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  dob: string;
  email: string;
  phone: string;
  designation: string;
  department: ApiGetDeptData;
  role: ApiGetRoleData;
  skills: { id: number; skill: string }[];
  dateOfJoining: string;
  salary: string;
  address: string;
  moreDetails: any;
};
export type TestType = {
  employee?: ApiGetEmpData[];
  department?: string[];
  skill?: { id: number; skill: string }[];
  role?: string[];
  testData?: dataBaseData;
  empObj?: dataBaseData;
  setEmployeeArr?: (arr: dataBaseData) => void;
};

export type ApiGetDeptData = {
  id: number;
  department: string;
};
export type ApiGetRoleData = {
  id: number;
  role: string;
};
export type ApiGetSkillData = {
  id: number;
  skill: string;
};

export type filterSectionContentProps = {
  SearchFun: (e: ChangeEvent) => void;
  clearFun: () => void;
  skillClickFun: (skill: string) => void;
  checkObj: {
    check: { id: string; isCheck: boolean }[];
    setCheck: React.Dispatch<
      React.SetStateAction<
        {
          id: string;
          isCheck: boolean;
        }[]
      >
    >;
  };
  searchValue: string;
};

export type tableContentProps = {
  sortObj: {
    ascSort: boolean;
    setAscSort: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
export interface AxiosHookProps {
  url: string;
  method: "get" | "post" | "put" | "delete";
  body?: any;
}
