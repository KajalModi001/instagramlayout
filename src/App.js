import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './Pages/Loginpage';
import Header from './Components/Header';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Index from './Pages/Index';
import Explore from './Pages/Explore';
import Sidebar from './Components/Sidebar';

// import Index from './Pages/Index';

function App() {
  return (
    <>

    <BrowserRouter> 
    {/* <Header/> */}
  
      <Routes> 
        <Route path='' element={<Loginpage/>}></Route>
        <Route path='home' element={<Index/>}></Route>
        <Route path='explore' element={<Explore/>}></Route>

      </Routes> 
      
      {/* Footer call here  */}
    </BrowserRouter>



    {/* <Index/> */}
    </>
  );
}

export default App;
