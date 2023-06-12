import http from "./httpService";
export const useCodeOffs = (token, id, code) => {
    return http.post(`/offs/${code}`, id, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};