//import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Home from './Component/Home';
import About from './Component/About';
import {Route, Switch} from "react-router-dom";
import Footer from './Component/Footer';
function App() {
  return (
       <> 
       <Header/>
      
       <Switch>
         
         <Route exact path='/' >
           <Home/>
          </Route>
         <Route  exact path='/Breeds' >
           <About/>
         </Route>
         
       </Switch>
       <Footer/>
          
       </>
  );
}

export default App;
