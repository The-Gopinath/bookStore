import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Createbook from './CreateBook';
import Showbook from './ShowBook';
import Editbook from './EditBook';
import Deletebook from './DeleteBook';

function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books/create" element={<Createbook/>}/>
        <Route path="/books/details/:id" element={<Showbook/>}/>
        <Route path="/books/edit/:id" element={<Editbook/>}/>
        <Route path="/books/delete/:id" element={<Deletebook/>}/>
      </Routes>
  )
}

export default App;
