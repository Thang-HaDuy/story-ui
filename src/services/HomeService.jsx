import * as httpRequest from '~/utils/httpRequest';

export const Home = async () => {
    try {
        const res = await httpRequest.get('story/update-story/');
        return res;
    } catch (error) {
        return [];
    }
};
