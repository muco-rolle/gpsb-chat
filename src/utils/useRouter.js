import { useContext } from 'react';
import { createBrowserHistory } from 'history';
import { __RouterContext } from 'react-router';

export const useRouter = () => useContext(__RouterContext);

export const history = createBrowserHistory();

export const redirectTo = path => history.push(path);
