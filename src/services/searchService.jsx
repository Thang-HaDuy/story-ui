import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('story/search/', {
            params: {
                q,
                type,
            },
        });
        return res;
    } catch (error) {
        return [];
    }
};
