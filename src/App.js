
import './App.css';
import Dashboard from './components/Dashboard'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import React, {
  Component
} from 'react'
import {
  UserProvider
} from './components/userContext';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      employeeData: []
    };

    this.consoleTest = this.consoleTest.bind(this);
  }

  setEmployeeData() {
    let dataArray = this.state.data.data;


    this.setState({
      employeeData: dataArray
    })



    console.log(this.state.employeeData);

  }

  consoleTest() {

    let dataArray = this.state.data.data;

    console.log("this i")


    for (let item of dataArray) {

      console.log("employe name is " + item.employee_name)
      console.log("salary name is " + item.employee_salary)
      console.log("employee age is " + item.employee_age)
    }

  }

  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
              
        this.setState({
          data: data
        })
        this.setEmployeeData();
      })
  }

  render() {
    console.log(this.state.employeeData)
    return(
      <div className="App">
        <UserProvider value = {this.state.employeeData}>
          <Router>
            <nav>
            
              <Link to="/">Home</Link> |
              <Link to="/dashboard">Dashboard</Link> 

     
            </nav>
 
          <Switch>  
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </Router>
  </UserProvider>
  </div>
    )
    

}
}

  function Home() {
    return (<div>
     <h2>Home</h2>
     <h3>Click the dashboard to view all employee stats.</h3>
      </div>);
  }


