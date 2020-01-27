import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
    state = {
        num: 0,
        run: "",
        h1: true
    };


    render() {

        const h1 = this.state.h1 ? "Hello" : "World";
        const btn = !this.state.h1 ? "Hello" : "World";
        return (
            <div className="App">
                <button onClick={() => this.setState({num: this.state.num + 1})}>{this.state.num}</button>
                <h1>{h1}</h1>
                <button onClick={() => this.setState({h1: !this.state.h1})}>{btn}</button>
                <button onClick={() => this.setState({run: this.state.run + "RUN "})}>{this.state.run}</button>
            </div>
        )
    }


}



