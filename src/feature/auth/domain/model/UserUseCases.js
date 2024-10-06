export async function login( email, password ) {
    localStorage.setItem('token', 'test1234');
    return {
        id: 1,
        email: 'test@gmail./com',
        userName: 'test'}
}

export async function register( email, password, userName ) {
    return {
        id: 1,
        email: 'test@gmail./com',
        userName: 'test'}
}

export async function logout() {
    localStorage.removeItem('token');
    return true;
}