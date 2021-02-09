import React, { Component } from 'react';
import './App.css';
import Counter from './counter'

class App extends Component {

  constructor(){
    super();
    this.state={
      count : 0,
      fruits : ['Apple', 'Orange', 'Banana']
    }

    this.incrementCount=this.incrementCount.bind(this);
  }
  incrementCount(){
    let count= this.state.count;
    this.setState({
      count: ++count
    });
  }
  render() {
    return (
      <div className="App">
        <Counter count={this.state.count} incrementCount={this.incrementCount} />
{/* ss/ */}
        <ul>
          {this.state.fruits.map((fruit, index)=>{
            return <li key={index}>{fruit}</li>
          })}
        </ul>
      </div>
    );
  }
}
export default App;
