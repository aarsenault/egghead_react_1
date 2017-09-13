// import React, { Component } from 'react';

// const App = () => <h1> Hello</h1>
// export default App;


import React from 'react';

class App extends React.Component {

  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }


    // render(){
    //   return (
    //     <div>
    //       <h1>Hello World</h1>
    //       <b>Bold</b>
    //     </div>
    //   )

      // only allowed to return a single node
      // return <h1>Hello World 2</h1>
      // return React.createElement('h1', null, 'Hello 2')

    // }
}

export default App