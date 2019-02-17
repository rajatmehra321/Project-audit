import React, { Component } from 'react';
import './App.css';
import { sampleData } from './demo.js'

class App extends Component {
  render() {
    const { audit = [] }= sampleData
    console.log(sampleData)
    return (
      
        <table border = "10">
        <tr>
            <th>Id</th>
            <th>created at</th>
            <th>event</th>
            <th>email</th>
        </tr>
        {audit.map((item)=>{
          return(
            <tr>
          <td>{}</td>
          <td>{}</td>
          <td></td>
          <td></td>
        </tr>
          )
        })}
        
        
        </table>
    );
  }
}

export default App;
