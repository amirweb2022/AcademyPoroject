import http from "./httpService";
export const getOneCourse = (token, shortName) => {
    return http.get(`/courses/${shortName}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};