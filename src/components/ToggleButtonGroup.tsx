import * as React from 'react';
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutProps } from '../types';

const StyledMuiToggleButtonGroup = styled(MuiToggleButtonGroup)(() => ({
    borderRadius: '100px',
    justifyContent: 'center',
    width: 'fit-content',
}));

const ToggleButtonGroup: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleAlignment = (event: any, newAlignment: string) => {
        navigate(`${newAlignment}`);
    };

    return (
        <StyledMuiToggleButtonGroup
            value={location.pathname}
            exclusive
            onChange={handleAlignment}
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return (
                        <>
                            {React.cloneElement(child, {
                                //@ts-ignore
                                onClick: handleAlignment,
                                currentPath: location.pathname
                            })}
                        </>
                    )
                }
            })}
        </StyledMuiToggleButtonGroup>
    );
}

export default ToggleButtonGroup
