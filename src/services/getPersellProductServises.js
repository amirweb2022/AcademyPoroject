import http from "./httpService";
export const getPersellProduct = () => {
    return http.get("/courses/presell");
};