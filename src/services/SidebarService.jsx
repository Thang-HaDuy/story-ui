import * as httpRequest from '~/utils/httpRequest';

export const Sidebar = async () => {
    try {
        const res = await httpRequest.get('story/hot-story-all/');
        return res;
    } catch (error) {
        return [];
    }
};
