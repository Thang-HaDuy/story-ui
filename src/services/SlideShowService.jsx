import * as httpRequest from '~/utils/httpRequest';

export const SlideShow = async (type = 'slide') => {
    try {
        const res = await httpRequest.get('/story/hot-story-day/', {
            params: {
                type,
            },
        });
        return res;
    } catch (error) {
        return [];
    }
};
