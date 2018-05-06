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

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const sections = ["A", "V", 5, true, "F", "ALINa", "X", "y", "Z"];

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(sections[0])}
                    {this.renderSquare(sections[1])}
                    {this.renderSquare(sections[2])}
                </div>
                <div className="board-row">
                    {this.renderSquare(sections[3])}
                    {this.renderSquare(sections[4])}
                    {this.renderSquare(sections[5])}
                </div>
                <div className="board-row">
                    {this.renderSquare(sections[6])}
                    {this.renderSquare(sections[7])}
                    {this.renderSquare(sections[8])}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;