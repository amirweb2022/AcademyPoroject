import http from "./httpService";
export const addComment = (data , token) => {
    return http.post('/comments', data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'content-type': 'application/json'
        },
    });
};