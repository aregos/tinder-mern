import React from 'react';
import './SwipeButtons.css';
import {Close, Favorite, FlashOn, Replay, StarRate} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <Replay />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <Close />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRate />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <Favorite />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOn />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;