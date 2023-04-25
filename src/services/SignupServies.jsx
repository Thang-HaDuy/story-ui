import request from '~/utils/httpRequest';

export const Signup = async (formData) => {
    try {
        const res = await request.post('/user/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        return res.data;
    } catch (e) {
        return [];
    }
};
