import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchData = async () => {
  try {
    const response = await api.get("/book");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (data: any) => {
  try {
    const response = await api.post("/book", data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
