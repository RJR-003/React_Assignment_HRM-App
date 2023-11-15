import { testData } from "../../core/config/testData";
import { employee } from "../../core/config/type";

export const sortFun = (FilterArr: employee[], dirFlag: number) => {
  let arrayToSort = testData.employee;
  if (FilterArr?.length !== 0) arrayToSort = FilterArr;

  let arrToRender = arrayToSort?.sort((a, b) => {
    const name1 = a.fullName.toLowerCase();
    const name2 = b.fullName.toLowerCase();

    let comparison = 0;

    if (name1 > name2) {
      comparison = 1 * dirFlag;
    } else if (name1 < name2) {
      comparison = -1 * dirFlag;
    }
    return comparison;
  });
  return arrToRender;
};

export default sortFun;
