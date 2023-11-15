import { ReactNode, createContext, useContext, useState } from "react";
import { testData } from "../config/testData";
import { dataBaseData } from "../config/type";
import { employeeList } from "../config/type";

const EmployeeListContext = createContext<employeeList>({ testData });

export function EmployeeProvider({ children }: { children: ReactNode }) {
  const [empObj, setEmpObj] = useState(testData);

  const setEmployeeArr = (arr: dataBaseData) => {
    setEmpObj({ ...arr });
  };
  const value: {
    empObj: dataBaseData;
    setEmployeeArr: (arr: dataBaseData) => void;
  } = {
    empObj,
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
