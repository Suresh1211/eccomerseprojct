
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';


function App() {
  return (
   <>
   <Header/>
   <BrowserRouter>
   <Routes>
    {/* <Route path="/"   element={<Home/>}></Route> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
