import http from "./httpService";
export const getPopularProduct = () => {
    return http.get("/courses/popular");
};