import http from "./httpService";
export const getTopBarMenu = () => {
    return http.get("/menus/topbar");
};