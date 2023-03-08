import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Componente de class Quadrado
class Square extends React.Component {
    render() {
        return (
        <button className="square" onClick={() => this.props.onClick()}>
            { this.props.value }
        </button>
        );
    }
}

// Componente de Class Tabuleiro
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { squares: Array(9).fill(null)
        }
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]}
        onClick={() => this.handleClick(i)} />
    }
    handleClick(i) {
        const squares = [...this.state.squares];
        squares[i] = 'X';
        this.setState({squares: squares});
    }
    render() {
        const status = 'Próximo jogador: X';
        return (
            <div>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {(this.renderSquare(0))}
                    {(this.renderSquare(1))}
                    {(this.renderSquare(2))}
                </div>
                <div className='board-row'>
                    {(this.renderSquare(3))}
                    {(this.renderSquare(4))}
                    {(this.renderSquare(5))}
                </div>
                <div className='board-row'>
                    {(this.renderSquare(6))}
                    {(this.renderSquare(7))}
                    {(this.renderSquare(8))}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div>{  }</div>
                    <ol>{  }</ol>
                </div>
            </div>
        );
    }
}

const root = document.getElementById('root');
ReactDOM.render(<Game/>, root);