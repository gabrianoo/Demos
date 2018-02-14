import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LoginView from "./module/login/LoginView";

class App extends Component {
    render() {
        return <LoginView/>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
