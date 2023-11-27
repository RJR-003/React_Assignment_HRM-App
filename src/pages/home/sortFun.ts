import { ApiGetEmpData } from "../../core/config/type";

export const sortFun = (FilterArr: ApiGetEmpData[], dirFlag: number) => {
  let arrayToSort = FilterArr;

  let arrToRender = arrayToSort?.sort((a, b) => {
    const name1 = (a.firstName + " " + a.lastName).toLowerCase();
    const name2 = (b.firstName + " " + b.lastName).toLowerCase();

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
