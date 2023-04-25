import httpRequest from '~/utils/httpRequest';

export const addCommentChap = async (chapterid, formData, access_token) => {
    try {
        const res = await httpRequest.post(`chapter/${chapterid}/add-comment/`, formData, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        return res;
    } catch (e) {
        return [];
    }
};
