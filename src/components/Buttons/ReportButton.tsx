import Badge from '@mui/material/Badge';
import LinkIconButton from '../LinkIconButton';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const ReportButton = () => (
    true ? (
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
                to='/reports'
                title='Ver reportes'
            >
                <TextSnippetIcon />
            </LinkIconButton>
        </Badge>
    ) : (
        <LinkIconButton
            to='/reports'
            title='Ver reportes'
        >
            <TextSnippetIcon />
        </LinkIconButton>
    )
);

export default ReportButton
