class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'h1',
            this.proprties,
            'Hello ',
            this.props.frameworkName,
            ' world!!!'
        );
    }
}
ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(HelloWorld, {
        id: 'ember',
        'data-object-id': '097F4E4F',
        frameworkName: 'Ember.js',
        style: { fontSize: '30pt' },
        title: 'A framework for creating ambitious web applications.' }),
    React.createElement(HelloWorld, {
        id: 'backbone',
        frameworkName: 'Backbone.js',
        title: 'Backbone.js gives structure to web applications...' }),
    React.createElement(HelloWorld, {
        id: 'angular',
        style: { borderColor: 'red',
            borderWidth: 1,
            borderStyle: 'solid' },
        frameworkName: 'Angular.js',
        title: 'Superheroic JavaScript MVW Framework' })
), document.getElementById('content'));
