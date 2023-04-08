import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import { useAuth } from '../../providers/AuthContext';
import TextInput from '../../components/TextInput';
import { useParams } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

type ChatFormValues = {
    message: string;
}

const ChatForm = () => {
    const { chatID } = useParams()
    const { state: { user } } = useAuth()
    const { control, handleSubmit, setValue, formState: {
        isSubmitting
    }} = useForm<ChatFormValues>({
        reValidateMode: "onBlur",
        defaultValues: {
            message: ''
        }
    });

    const onSubmit = React.useCallback(async (values: ChatFormValues) => {
        try {
            if (values.message) {
                setValue('message', '')
            }
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.08)'
        }} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ p: 1, color: 'black' }}>
                <TextInput
                    name='message'
                    control={control}
                    placeholder='Escribir un mensaje'
                    endAdornment={
                        <LoadingButton
                            color="primary"
                            variant="contained"
                            loading={isSubmitting}
                        >
                            Enviar
                        </LoadingButton>
                        // <IconButton
                        //     sx={{
                        //         fontSize: '1rem',
                        //         padding: '0'
                        //     }}
                        //     type="submit"
                        //     disabled={isSubmitting}
                        // >
                        //     <SendIcon />
                        // </IconButton>
                    }
                    sx={{
                        bgcolor: '#E6EBEF'
                    }}
                />
            </Box>
        </Box>
    );
}

export default ChatForm
