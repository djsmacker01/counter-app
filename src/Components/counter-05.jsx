import React, { Component } from 'react'


class CounterHandler extends Component {
  state = {
    value:this.props.counter.value 
  };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // } 
  // instead of using the bind method ,use an arrow function on the method or function you want to bind

  formatCount() {
    const {value} = this.state
    return value === 0 ? 'Zero' : value
  }

  styles = {
    fontSize: 18,
    fontWeight: 'bold'
  };
  handleIncrement = product => {
    
    this.setState({value: this.state.value + 1})
    
  }
 
  render() {
    console.log( this.props);
   
    return (
      
      <div>
       
        <span style={this.styles} className={this.getBadgeClasses()}>{ this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn badge-secondary btn-sm">Increment</button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id )} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
     );
  }
   getBadgeClasses(classes) {
     if (this.state.value === 0) {
       classes = 'badge m-2 badge-warning';
     }
     else {
       classes = 'badge m-2 badge-primary';
     }
     return classes;
   }
}
 
export default CounterHandler;