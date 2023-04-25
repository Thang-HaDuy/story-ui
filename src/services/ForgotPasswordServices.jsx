import httpRequest from '~/utils/httpRequest';

export const ForgotPassword = async (formData) => {
    try {
        const res = await httpRequest.post(`forgot-password/`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        return res.data;
    } catch (e) {
        return [];
    }
};
