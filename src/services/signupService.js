import http from "./httpService";
export const singupUser = (data) => {
    return http.post("/auth/register" , data);
};