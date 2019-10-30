import React from 'react';
import { bool, func } from 'prop-types';
import { StyledMainScreen } from './MainScreen.styled';

const MainScreen = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return (
        <StyledMainScreen aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
            <span></span>
            <span></span>
            <span></span>
        </StyledMainScreen >
    )
}
MainScreen.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};


export default MainScreen;