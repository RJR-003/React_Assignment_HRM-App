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
export type initialEmpDetails = {
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
  empArr?: dataBaseData;
  setEmployeeArr?: (arr: dataBaseData) => void;
};
