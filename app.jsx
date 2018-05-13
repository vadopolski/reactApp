import React from 'react';

function Square(props) {
    return (
        <button className="square">
            {props.value}
        </button>
    );
}



function Row(startindex) {
    const sections = ["A", "V", 5, true, "F", "A", "X", "y", "Z"];



    return (
        <div className="board-row">
            <Square value={sections[Number(startindex)]} />
            <Square value={sections[startindex + 1]} />
            <Square value={sections[startindex + 2]} />
        </div>
    );

}

class Board extends React.Component {
    render() {
        return (
            <div>
                <Row startindex={0} />
                <Row startindex={3} />
                <Row startindex={6} />
            </div>
        );
    }
}

export default Board;