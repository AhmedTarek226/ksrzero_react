import axios from "axios";
 export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
  });
axiosInstance.interceptors.request.use(

    function (config)
    {
        return config;
    }
)

axiosInstance.interceptors.response.use(

    function(response)
    {
        return response;
    }
)