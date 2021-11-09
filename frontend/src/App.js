import './App.css';
import { Button } from 'antd';
import Navbar from './Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Explore from './components/pages/Explore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about-us' exact component={AboutUs}/>
        <Route path='/contact-us' exact component={ContactUs}/>
        <Route path='/explore' exact component={Explore}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
