import * as httpRequest from '~/utils/httpRequest';

export const Chapter = async (storyid) => {
    try {
        const res = await httpRequest.get(`story/${storyid}/chapter/`);
        return res;
    } catch (e) {
        return [];
    }
};
