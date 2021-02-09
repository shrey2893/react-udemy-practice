import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
  render(){
    return(<h3>Hello</h3>);    
  }

}

class World extends React.Component{
  render(){
    return(<h3>World</h3>)
  }
}

class HelloWorld extends React.Component{
  render(){
    return(
      <section>
        <Hello/>
        <World/>
      </section>

    )
  }
}



ReactDOM.render(<HelloWorld/>, document.getElementById('root'))