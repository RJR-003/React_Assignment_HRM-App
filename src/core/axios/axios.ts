import axios from "axios";
import { useEffect, useState } from "react";
import { constants } from "../config/constants";
import { AxiosHookProps } from "../config/type";

const API = axios.create({
  baseURL: constants.baseUrl,
});

export const getData = (url: string) => {
  return API.get(url);
};

export const postData = (url: string, payload: object) => {
  return API.post(url, payload);
};

export const updateData = (url: string, payload: object) => {
  return API.patch(url, payload);
};

export const deleteData = (url: string) => {
  return API.delete(url);
};

const useAxios = ({ url, method, body = null }: AxiosHookProps) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    API[method](url, JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body]);

  return { response, error, loading };
};

export default useAxios;
