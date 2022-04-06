import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentView } from '../../store/actions';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const SwitchView = () => {
    const dispatch = useDispatch();
    const [view, setView] = useState('module');

    const handleViewChange = (event, nextView) => {
        setView(nextView);
        dispatch(setCurrentView(nextView));
    }

    return (
        <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleViewChange}
        >
            <ToggleButton value="module" aria-label="module">
                <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="list" aria-label="list">
                <ViewListIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default SwitchView;