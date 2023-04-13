import Badge from '@mui/material/Badge';
import LinkIconButton from '../LinkIconButton';
import SmsIcon from '@mui/icons-material/Sms';

const MessageButton = () => (
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
                to='/chat'
                title='Ver mensajes'
            >
                <SmsIcon />
            </LinkIconButton>
        </Badge>
    ) : (
        <LinkIconButton
            to='/chat'
            title='Ver mensajes'
        >
            <SmsIcon />
        </LinkIconButton>
    )
);

export default MessageButton
