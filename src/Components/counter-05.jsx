import React, { Component } from 'react'


class CounterHandler extends Component {

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState)
  // }
  
  formatCount() {
    const {value} = this.props.counter
    return value === 0 ? 'Zero' : value
  }

  styles = {
    fontSize: 18,
    fontWeight: 'bold'
  };
    
 
  render() {
  //  console.log("counters-05 - Rendered")
    return (
      
      <div className="row">
        <div className="col-2">
          <span style={this.styles} className={this.getBadgeClasses()}>{ this.formatCount()}</span>
        </div>

        <div className="col" >
          <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn badge-secondary btn-sm m-2">+</button>
        
         <button
          onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn badge-secondary btn-sm m-1" disabled={this.props.counter.value === 0 ? 'disabled' : ''}>
            -
            </button>
          
         <button
          onClick={() => this.props.onMultiply(this.props.counter)}
            className="btn badge-secondary btn-sm m-1 ">*</button>
         
        <button onClick={()=>this.props.onDelete(this.props.counter.id )} className="btn btn-danger btn-sm  m-1">Delete</button>
        </div>
        
        
      </div>
     );
  }
   getBadgeClasses(classes) {
     if (this.props.counter.value === 0) {
       classes = 'badge m-2 badge-warning';
     }
     else {
       classes = 'badge m-2 badge-primary';
     }
     return classes;
   }
}
 
export default CounterHandler;