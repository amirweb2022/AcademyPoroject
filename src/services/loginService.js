import http from "./httpService";
export const loginUser = (data) => {
    return http.post("/auth/login" , data);
};