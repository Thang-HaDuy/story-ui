import httpRequest from '~/utils/httpRequest';

export const Login = async (formData) => {
    try {
        const res = await httpRequest.post('/o/token/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        return res.data;
    } catch (e) {
        return [];
    }
};
