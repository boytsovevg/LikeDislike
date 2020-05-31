import React, { useState } from 'react';
import './LikeDislike.css';
import BehaviorButton from '../behavior-button/BehaviorButton';

const LikeDislike = () => {
    const [likesCount, setLikesCount] = useState(100);
    const [dislikesCount, setDislikesCount] = useState(25);
    const [behaviorState, setBehaviorState] = useState('');


    const handleLikesButtonClick = () => {
        switch (behaviorState) {
            case 'Like': {
                setBehaviorState('');
                setLikesCount(likesCount - 1);
                break;
            }
            case 'Dislike': {
                setBehaviorState('Like');
                setLikesCount(likesCount + 1);
                setDislikesCount(dislikesCount - 1);
                break;
            }
            default:
                setBehaviorState('Like');
                setLikesCount(likesCount + 1);
        }
    }

    const handleDislikesButtonClick = () => {
        switch (behaviorState) {
            case 'Dislike': {
                setBehaviorState('');
                setDislikesCount(dislikesCount - 1);
                break;
            }
            case 'Like': {
                setBehaviorState('Dislike');
                setDislikesCount(dislikesCount + 1);
                setLikesCount(likesCount - 1);
                break;
            }
            default:
                setBehaviorState('Dislike');
                setDislikesCount(dislikesCount + 1);
        }
    }

    return (
        <div className="controls">
            <BehaviorButton
                variant="Like"
                count={likesCount}
                active={behaviorState === 'Like'}
                toggleActiveChange={handleLikesButtonClick}
            />

            <BehaviorButton
                variant="Dislike"
                count={dislikesCount}
                active={behaviorState === 'Dislike'}
                toggleActiveChange={handleDislikesButtonClick}
            />
        </div>
    );
}

export default LikeDislike;
