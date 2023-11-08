export type employee = {
  dateOfBirth: string;
  dateOfJoin: string;
  department: string;
  email: string;
  fullName: string;
  id: number;
  role: string;
  skills: string[];
  workLocation: string;
  imageSrc: string;
};

export type dataBaseData = {
  employee: employee[];
  department: String[];
  skill: string[];
  role: string[];
};
