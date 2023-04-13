import Badge from '@mui/material/Badge';
import LinkIconButton from '../LinkIconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationButton = () => (
    false ? (
        <Badge
            badgeContent=''
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            sx={{
                '& .MuiBadge-badge': {
                    height: '16px',
                    width: '16px',
                    borderRadius: '100px',
                    border: '2px solid #fff'
                }
            }}
            color='error'
            variant="dot"
            overlap="circular"
        >
            <LinkIconButton
                to='/notifications'
                title='Ver notificaciones'
            >
                <NotificationsIcon />
            </LinkIconButton>
        </Badge>
    ) : (
        <LinkIconButton
            to='/notifications'
            title='Ver notificaciones'
        >
            <NotificationsIcon />
        </LinkIconButton>
    )
);

export default NotificationButton
