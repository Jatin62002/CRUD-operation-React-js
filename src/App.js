// import logo from './logo.svg';

import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Home from './components/pages/Home'
import Addnew from './components/student/AddNew'
import './App.css';
import List from './components/student/List';
import View from './components/student/View';
import Edit from './components/student/Edit';
function App() {
  return (
    <div className="App">
      <h1>Welcome To My CRUD Project</h1>
      <BrowserRouter>
      <nav className='menu'>
      <Link to="/">Home</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/Addnew">AddNew</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/List">DataList</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Addnew" element={<Addnew/>}></Route>
        <Route path="/List" element={<List/>}></Route>
        <Route path="/View/:id" element={<View/>}></Route>
        <Route path="/Edit/:id" element={<Edit/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
