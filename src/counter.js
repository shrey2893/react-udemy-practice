import React from 'react';
import ReactDOM from 'react-dom'

class Counter extends React.Component {
    render() {
        return (
            <div>
                {this.props.count}
                <div>
                    <button onClick={this.props.incrementCount} >Add Counter</button>
                </div>
            </div>
        )
    }
}
 export default Counter