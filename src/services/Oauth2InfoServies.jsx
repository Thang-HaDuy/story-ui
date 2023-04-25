import * as httpRequest from '~/utils/httpRequest';

export const Oauth2Info = async () => {
    try {
        const res = await httpRequest.get(`oauth-info/`);
        return res;
    } catch (e) {
        return [];
    }
};
