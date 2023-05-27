import http from "./httpService";
export const search = (value) => {
    return http.get(`/search/${value}`);
};