/*
look there are some errors related to  missing components you can add them by connecting with the server:
    - client --> instance of axios
    - notification --> notification system

    and I think the code down below is explicit 
    check the docs (https://easy-peasy.now.sh/) to understand more
*/
import { thunk, action } from 'easy-peasy';
import { notify, client, redirectTo } from 'utils';

export const LoginModel = {
    loading: false,
    data: '',
    error: '',

    request: action((state, payload) => {
        return (state.loading = payload);
    }),

    success: action((state, payload) => {
        state.loading = false;
        return (state.data = payload);
    }),

    failure: action((state, payload) => {
        state.loading = false;
        return (state.error = payload);
    }),

    login: thunk(async (actions, payload) => {
        actions.request(true);

        try {
            const response = await client.post('/rest-auth/login/', {
                ...payload
            });
            actions.success(response.data);
            localStorage.setItem('key', JSON.stringify(response.data));
            redirectTo('/chat');

            notify({
                type: 'success',
                title: 'Login Success',
                message: "You're successfully logged in."
            });
        } catch (error) {
            notify({
                type: 'danger',
                title: 'Login Failed',
                message: 'Invalid login credentials.'
            });
            actions.failure(error.response);
        }
    })
};
