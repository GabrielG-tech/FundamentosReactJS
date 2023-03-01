'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { p1: 'Aprendendo', p2: 'React' };
    }

    render() {
        return React.createElement('h2', null, 'Mensagem: ' + this.state.p1 + ' ' + this.state.p2);
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App), domContainer);
