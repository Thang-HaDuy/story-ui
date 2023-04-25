import * as httpRequest from '~/utils/httpRequest';

export const StoryFull = async () => {
    try {
        const res = await httpRequest.get('story/story-full/');
        return res;
    } catch (error) {
        return [];
    }
};
