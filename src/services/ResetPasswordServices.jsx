import httpRequest from '~/utils/httpRequest';

export const ResetPassword = async (fromData) => {
    try {
        const res = await httpRequest.patch(`/reset-password/`, fromData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return res;
    } catch (e) {
        return [];
    }
};
