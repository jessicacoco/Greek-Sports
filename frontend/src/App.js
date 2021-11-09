import './App.css';
import Navbar from './Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
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
      </Switch>
      </Router>
    </>
  );
}

export default App;
