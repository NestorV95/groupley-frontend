import './App.css';
// import Login from './LogIn/LogInLayout.js'
// import SignUp from './signUp/SignUpLayout.js'
import HomeLayout from './Home/HomeLayout'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const  App=()=>{
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={HomeLayout}/>
        </Switch>
      </Router>
    </div>
  );

}

export default App;
