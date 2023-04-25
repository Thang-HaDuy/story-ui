import httpRequest from '~/utils/httpRequest';

export const addComment = async (storyid, formData, access_token) => {
    try {
        const res = await httpRequest.post(`story/${storyid}/add-comment/`, formData, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        return res;
    } catch (e) {
        return [];
    }
};
