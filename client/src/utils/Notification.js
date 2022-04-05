
    import { toast } from 'toast-notification-alert';

    export async function notify(notificationDescription){
        await toast.show({title: `${notificationDescription}`, position: 'bottomright', type: 'info'});
    }



