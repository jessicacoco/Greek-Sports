import './App.css';
import { Button } from 'antd';
import Navbar from './Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about-us' exact component={AboutUs}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
