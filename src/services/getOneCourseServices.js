import http from "./httpService";
export const getOneCourse = (token, courseShortName) => {
    return http.post(`/courses/${courseShortName}`, {
        headers: {
            'Authorization' : `Bearer ${token}`,
        },
    });
};