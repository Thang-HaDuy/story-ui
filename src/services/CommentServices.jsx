import * as httpRequest from '~/utils/httpRequest';

export const Comment = async (storyid) => {
    try {
        const res = await httpRequest.get(`story/${storyid}/comment/`);
        return res;
    } catch (e) {
        return [];
    }
};
