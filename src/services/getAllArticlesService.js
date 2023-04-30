import http from "./httpService";
export const getAllArticles = () => {
    return http.get("/articles");
};