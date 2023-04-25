import httpRequest from '~/utils/httpRequest';

export const CurrenUser = async (access_token) => {
    try {
        const res = await httpRequest.get(`user/current-user/`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        return res.data;
    } catch (e) {
        return [];
    }
};
