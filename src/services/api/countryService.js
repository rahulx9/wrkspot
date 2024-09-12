import { get } from "./httpHelper"

export const getAllCountries = async () => {
    const {data} = await get("/countries/countries");
    return data;
}