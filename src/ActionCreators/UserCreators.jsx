export function loginUser(payload = null) {
    return { type: 'USER_LOGIN', payload };
}

export function logoutUser(payload = null) {
    return { type: 'USER_LOGOUT', payload };
}
