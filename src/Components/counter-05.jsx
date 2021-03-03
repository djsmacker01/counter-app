import React, { Component } from 'react'


class CounterHandler extends Component {
  state = {
    count: 0
  };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // } 
  // instead of using the bind method ,use an arrow function on the method or function you want to bind

  formatCount() {
    const {count} = this.state
    return count === 0 ? 'Zero' : count
  }

  styles = {
    fontSize: 18,
    fontWeight: 'bold'
  };
  handleIncrement = product => {
    console.log(product)
    this.setState({count: this.state.count + 1})
    // console.log('Increment button clicked' , this)
  }

  render() { 
    return ( 
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>{ this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn badge-secondary btn-sm">Increment</button>
      </div>
     );
  }
   getBadgeClasses(classes) {
     if (this.state.count === 0) {
       classes = 'badge m-2 badge-warning';
     }
     else {
       classes = 'badge m-2 badge-primary';
     }
     return classes;
   }
}
 
export default CounterHandler;