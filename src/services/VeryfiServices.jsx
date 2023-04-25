import httpRequest from '~/utils/httpRequest';

export const Veryfi = async (fromData) => {
    try {
        const res = await httpRequest.post(`/activate/`, fromData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return res;
    } catch (e) {
        return [];
    }
};
