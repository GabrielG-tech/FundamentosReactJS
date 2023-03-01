const e = React.createElement;

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    render() {
        if (this.state.liked) {
            return 'Você curtiu.';
        }
        return e('button', {
            onClick: () => 
                this.setState(
                    { liked: true }
                )
        }, 'Curtir'
        )
    }
}

const domContainer = document.getElementById("container");
ReactDOM.render(e(Like), domContainer);