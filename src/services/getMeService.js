import http from "./httpService";
export const getMe = (token) => {
    return http.get("/auth/me", {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};