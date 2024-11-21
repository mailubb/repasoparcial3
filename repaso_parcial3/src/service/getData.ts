import { DataType } from "../types";

const BASE_URL = "https://potterapi.onrender.com/es/";

export const getApiContent = async <T>(type: DataType) => {
  const response = await fetch(`${BASE_URL}${type}`);
  const data = await response.json();
  return data as T[];
};