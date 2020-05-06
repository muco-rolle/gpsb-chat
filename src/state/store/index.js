import { createStore } from 'easy-peasy';

import { LoginModel } from '../models';

export const store = createStore({
    auth: LoginModel
});
