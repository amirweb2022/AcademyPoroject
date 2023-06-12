import http from "./httpService";
export const registerToCourse = (token, id, price) => {
    return http.post(`/courses/${id}/register`, price, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};