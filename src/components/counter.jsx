import React, { Component } from 'react';

class Counter extends Component {
    styles = {
        fontSize: 10,
        fontWeight: "bold"
    }

    render() { 
        return ( 
            <div>
                {this.props.children}
                <span style ={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn btn-secondary btn-sm">
                    Increment
                </button>
                
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id) } 
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </div>
        )
    }  

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? <h1>Zero</h1> : value;
    }
}
 
export default Counter;