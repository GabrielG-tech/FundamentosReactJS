const e = React.createElement;

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    render() {
        if (this.state.liked) {
            return 'Você clicou';
        }
        return (
            // Sintaxe JSX
            <button onClick={() => this.setState({ liked: true })}>
                Clique aqui
            </button>
        );
    }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(e(Like), domContainer);
