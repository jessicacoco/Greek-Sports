import './App.css';
import Navbar from './Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Explore from './components/pages/Explore';
import Result from './components/pages/Result';
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
        <Route path='/result' exact component={Result}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
