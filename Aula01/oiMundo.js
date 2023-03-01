`use strict`;

class OiMundo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nome: 'Mundo' };
    }

    render() {
        return React.createElement('h1', null, 'Oi, ' + this.state.nome);
    }
}

const domContainer = document.querySelector(`#app`);
ReactDOM.render(React.createElement(OiMundo), domContainer);
