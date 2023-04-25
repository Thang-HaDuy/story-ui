import * as httpRequest from '~/utils/httpRequest';

export const Story = async (storyid) => {
    try {
        const res = await httpRequest.get(`/story/${storyid}/`);
        return res;
    } catch (e) {
        return [];
    }
};
