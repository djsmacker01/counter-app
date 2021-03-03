import React, { Component } from 'react'

class Counter extends Component {
  
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/id/237/200/300"
  };
  
  formatCount() {
    const {count} = this.state
    return count === 0 ? 'Zero' : count
  }

  styles = {
    fontSize: 18,
    fontWeight: 'bold'
  };
  render() { 
    // let classes = ' '

    // classes = this.getBadgeClasses(classes);
    return ( 
      
      <div>
        
        <span style={this.styles} className={this.getBadgeClasses()}>{ this.formatCount()}</span>
        <button className="btn badge-secondary btn-sm">Increment</button>
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
 
export default Counter;