import React from 'react';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

class Row extends React.Component {
    square(i) {
        return <Square value={i} />;
    }


    render() {
        const sections = ["A", "V", 5, true, "F", "ALINa", "X", "y", "Z"];

        return (
            <div className="board-row">
                {this.square(sections[0])}
                {this.square(sections[1])}
                {this.square(sections[2])}
            </div>
        );
    }

}


class Board extends React.Component {

    row(i) {
        return <Row value={i} />;
    }

    render() {
        const sections = ["A", "V", 5, true, "F", "ALINa", "X", "y", "Z"];

        return (
            <div>
                {this.row(sections)}
            </div>
        );
    }
}

export default Board;