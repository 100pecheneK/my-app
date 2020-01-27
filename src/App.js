import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
    state = {
        num: 0
    };

    render() {
        return (
            <div className="App">
                <button onClick={()=>this.setState({num: this.state.num + 1})}>{this.state.num}</button>
              <h1>Hello!</h1>
            </div>
        )
    }


}



