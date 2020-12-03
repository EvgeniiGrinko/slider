class ClickCounterButton extends React.Component {
    render() {
    return <button
    onClick={this.props.handler}

    className="btn btn-danger">
    Increase Volume (Current volume is {this.props.counter})
    </button>
    }
    }
    class Content extends React.Component {
        constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {counter: 0}
        }
        handleClick(event) {
        this.setState({counter: ++this.state.counter})
        }
        render() {
        return (
        <div>
        <ClickCounterButton
        counter={this.state.counter}
        handler={this.handleClick}/>
        </div>
        )
        }
        }