import { store } from 'react-notifications-component';

export const notify = ({ type, title, message }) =>
    store.addNotification({
        title,
        message,
        type,
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
            duration: 10000,
            onScreen: true
        }
    });
