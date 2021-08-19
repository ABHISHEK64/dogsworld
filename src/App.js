//import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Home from './Component/Home';
import About from './Component/About';
import {Route, Switch} from "react-router-dom";
import Footer from './Component/Footer';
import DogsSearchImg from './Component/DogsSearchImg';
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
         <Route exact path='/Search'>
         <DogsSearchImg/>
         </Route>
         
       </Switch>
       <Footer/>
          
       </>
  );
}

export default App;
