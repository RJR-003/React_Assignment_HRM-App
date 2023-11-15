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
  // profileUpload: string;
  role: string;
  Department: string;
  location: string;
  skill: string;
};
export type employeeList = {
  testData?: dataBaseData;
  empObj?: dataBaseData;
  setEmployeeArr?: (arr: dataBaseData) => void;
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
};

export type tableContentProps = {
  sortObj: {
    ascSort: boolean;
    setAscSort: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
