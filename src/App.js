import React, { Component } from 'react';
import './App.css';
import { sampleData } from './demo.js'

class App extends Component {
  render() {
    const { audit = [] } = sampleData
    console.log(sampleData)
    return (
      <div className="table-audit">
        <div>
          <h1> Audit table of Company Employees</h1>
          <table border="10">
            <tbody>
              <tr>
                <th>Id</th>
                <th>created at</th>
                <th>event</th>
                <th>email</th>
              </tr>
              {audit.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.created_at}</td>
                    <td>{item.event}</td>
                    <td>{item.user_email}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

export default App;
