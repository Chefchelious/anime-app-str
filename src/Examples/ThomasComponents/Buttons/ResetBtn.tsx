import React from 'react';

interface IResetBtn {
    resetGame: React.MouseEventHandler
}

const ResetBtn: React.FC<IResetBtn> = (props) => {
    return (
            <button onClick={props.resetGame} style={{cursor: 'pointer'}}>Reset</button>

    );
};

export default ResetBtn;