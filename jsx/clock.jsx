const AnalogDisplay = function AnalogDisplay(props) {
    let date = new Date(props.time);
    let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black'
    }
    let secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + ((date.getSeconds()/60)*360 - 90 ).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
    }
    let minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: 'rotate(' + ((date.getMinutes()/60)*360 - 90 ).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
    }
    let hourHandStyle = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid grey',
    width: '20%',
    height: 7,
    transform: `rotate(${((date.getHours()/12)*360 - 90 )}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
    }
    console.log(props.time)
    
    return <div>
    <div style={dialStyle}>
    <div style={secondHandStyle}/>
    <div style={minuteHandStyle}/>
    <div style={hourHandStyle}/>
    </div>
    </div>
    }
const DigitalDisplay = function(props) {
    
    return <div>{props.time}</div>
    }
    
        
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {currentTime: (new Date())}
        }
        launchClock() {
            setInterval(()=>{
            console.log('Updating time...')
            this.setState({
            currentTime: (new Date())
            })
            }, 1000) 
        }
        
        componentWillMount() {
        console.log('componentWillMount is triggered')
        }
        componentDidMount(e) {
        console.log('componentDidMount is triggered')
        console.log('DOM node: ', ReactDOM.findDOMNode(this))
        }
        componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps is triggered')
        console.log('new props: ', newProps)
        }
        shouldComponentUpdate(newProps, newState) {
           
            console.log('shouldComponentUpdate is triggered')
            console.log('new props: ', newProps)
            console.log('new state: ', newState)
            return true}
        componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate is triggered')
        console.log('new props: ', newProps)
        console.log('new state: ', newState)
        }
        componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate is triggered')
        console.log('new props: ', oldProps)
        console.log('old props: ', oldState)
        }
        componentWillUnmount() {
        console.log('componentWillUnmount')
        }
           

    render() {
        console.log('Rendering Clock...')
    return <div>
        <AnalogDisplay time={this.state.currentTime}/>
        <DigitalDisplay time={this.state.currentTime.toLocaleString()}/>
        
        </div>
    }
    }

    
    ReactDOM.render(
    <Clock />,
    document.getElementById('content')
    )