import http from "./httpService";
export const getAllProduct = () => {
    return http.get("/courses");
};