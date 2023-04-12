import http from "./httpService";
export const getIndexInfos = () => {
    return http.get("/infos/index");
};