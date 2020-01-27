import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
    state = {
        num: 0,
        run: ""
    };

    render() {

        return (
            <div className="App">
                <button onClick={()=>this.setState({num: this.state.num + 1})}>{this.state.num}</button>
              <h1>Hello!</h1>
                <button onClick={()=>this.setState({run: this.state.run + "RUN "})}>{this.state.run}</button>
            </div>
        )
    }


}



