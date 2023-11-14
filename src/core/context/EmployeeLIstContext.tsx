import { ReactNode, createContext, useContext, useState } from "react";
import { testData } from "../config/testData";
import { dataBaseData } from "../config/type";
import { employeeList } from "../config/type";

const EmployeeListContext = createContext<employeeList>({ testData });

export function EmployeeProvider({ children }: { children: ReactNode }) {
  const [empArr, setEmpArr] = useState(testData);

  const setEmployeeArr = (arr: dataBaseData) => {
    setEmpArr({ ...arr });
  };
  const value: {
    empArr: dataBaseData;
    setEmployeeArr: (arr: dataBaseData) => void;
  } = {
    empArr,
    setEmployeeArr,
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
