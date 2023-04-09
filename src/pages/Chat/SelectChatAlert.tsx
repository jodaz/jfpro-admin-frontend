import { Box, Typography } from "@mui/material"

const SelectChatAlert = () => (
    <Box sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Typography
            variant="h6"
            color="text.primary"
        >
            Seleccione un chat de su lista de mensajes
        </Typography>
    </Box>
)

export default SelectChatAlert
