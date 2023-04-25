import * as httpRequest from '~/utils/httpRequest';

export const ChapterDetail = async (chapterid) => {
    try {
        const res = await httpRequest.get(`chapter/${chapterid}/`);
        return res;
    } catch (e) {
        return [];
    }
};
