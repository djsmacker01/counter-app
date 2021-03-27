import React, { Component } from 'react'
import CounterHandler from './counter-05'

class Counters extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
      
    ]

  };
  handleDeleteBtn = (counterId) => {
    const counters = this.state.counter.filter(c => c.id !== counterId);
    this.setState({
      counter:counters
    })
  }
  
  render() { 
    return ( 
      <div>
        {this.state.counter.map(count =>
        <CounterHandler
          key={count.id}
          counter={count}
          onDelete={this.handleDeleteBtn}>
          <h4>Counter #{ count.id}</h4>
          </CounterHandler>)}
      </div>
 
     );
  }
}
 
export default Counters;