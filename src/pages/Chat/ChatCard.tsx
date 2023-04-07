import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Skeleton from "@mui/material/Skeleton";
import { alpha } from '@mui/material';
import Badge from '@mui/material/Badge';
import truncateString from '../../utils/truncateString';
import LinkBehavior from '../../components/LinkBehavior';

interface ChatCardProps {
    data: any,
    index: number
}

const Picture = (data: any) => (
    <Avatar
        sx={{
            height: '50px',
            width: '50px'
        }}
    />
)

const ChatCard: React.FC<ChatCardProps> = ({
    data,
    index,
}) => {
    const loading = data == null;
    const anchorRef = React.useRef(null)

    return (
        <ListItem
            key={index}
            // component={!loading &&  LinkBehavior}
            disablePadding
            to={!loading && `${data.conversation_id}`}
            sx={{
                color: 'unset',
            }}
        >
            <Box sx={{
                cursor: 'pointer',
                display: 'flex',
                padding: '0 0.5rem',
                borderRadius: '6px',
                width: '100%',
                alignItems: 'start',
                transition: '0.1s',
                textDecoration: 'none',
                color: 'unset',
                p: 1,
                '&:hover': {
                    backgroundColor: theme => `${alpha(theme.palette.divider, 0.7)}`
                }
            }} ref={anchorRef}>
                <Box marginRight='1rem'>
                    {loading ? (
                        <Skeleton
                            animation="wave"
                            variant="circular"
                            width={40}
                            height={40}
                        />
                    ) : (
                        <Box>
                            {status
                            ? (
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
                                    color={'success'}
                                    variant="dot"
                                    overlap="circular"
                                >
                                    <Picture {...data} />
                                </Badge>
                            ): (
                                <Picture {...data} />
                            )}
                        </Box>
                    )}
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                }}>
                    {loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : (
                        <Typography variant="subtitle1" fontWeight={500}>
                            {truncateString(`${data.user.name} ${data.user.lastName ? data.user.lastName : ''}`, 12 )}
                        </Typography>
                    )}
                </Box>
            </Box>
        </ListItem>
    );
}

export default ChatCard
