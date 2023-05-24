import http from "./httpService";
export const getOneSessionInfo = (token, shortName , id) => {
    return http.get(`/courses/${shortName}/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};