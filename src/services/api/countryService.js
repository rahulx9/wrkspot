import { get } from "./httpHelper";

export const getAllCountries = async () => {
  try {
    const { data } = await get("/countries/countries");
    return data;
  } catch (error) {
    console.error("Error occured while gettin all countries ", error);
  }
};
