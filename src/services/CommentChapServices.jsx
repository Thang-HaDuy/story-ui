import * as httpRequest from '~/utils/httpRequest';

export const CommentChap = async (chapterid) => {
    try {
        const res = await httpRequest.get(`chapter/${chapterid}/comment/`);
        return res;
    } catch (e) {
        return [];
    }
};
