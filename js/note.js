class ClickCounterButton extends React.Component {
    render() {
        return React.createElement(
            "button",
            {
                onClick: this.props.handler,
                className: "btn btn-info" },
            "Don\u2019t touch me with your dirty hands!"
        );
    }
}

class Counter extends React.Component {
    render() {
        return React.createElement(
            "span",
            null,
            "Clicked ",
            this.props.value,
            " times."
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
            React.createElement(ClickCounterButton, { handler: this.handleClick }),
            React.createElement("br", null),
            React.createElement(Counter, { value: this.state.counter })
        );
    }
}
