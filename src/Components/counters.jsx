import React, { Component } from 'react'
import CounterHandler from './counter-05'

class Counters extends Component {
 
  
  render() {
    console.log('counter - Rendered')
    const { onDelete, onIncrement, onReset, onDecrement, counters,onMultiply } = this.props;
    return ( 
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
        onClick={onReset}>
          Reset
        </button>
        {counters.map(count =>
        <CounterHandler
          key={count.id}
          counter={count}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onMultiply={onMultiply}
          
          >
            
          <h4>Counter #{ count.id}</h4>
          </CounterHandler>)}
      </div>
 
     );
  }
}
 
export default Counters;