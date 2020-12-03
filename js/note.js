class ClickCounterButton extends React.Component {
    render() {
        return React.createElement(
            "button",
            {
                onClick: this.props.handler,

                className: "btn btn-danger" },
            "Increase Volume (Current volume is ",
            this.props.counter,
            ")"
        );
    }
}
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { counter: 0 };
    }
    handleClick(event) {
        this.setState({ counter: ++this.state.counter });
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(ClickCounterButton, {
                counter: this.state.counter,
                handler: this.handleClick })
        );
    }
}
