import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import KanbanPanosu from './pages/KanbanPanosu/KanbanPanosu';
import Header from './components/Header/Header';
import AnaSayfa from './pages/AnaSayfa/Anasayfa';
import TicketPage from './pages/TicketPage/TicketPage';
import Login from './pages/Login/Login'
import { AuthContextProvider, useAuth } from './context/AuthContext';
import Ayarlar from './pages/Ayarlar/Ayarlar';


const ProtectedRoute1 = (props) => {

  const userAuthContext = useAuth()
  return(
    <>
      <Header></Header>
      {
        userAuthContext.isLogin === true ? props.children : <Navigate to={'/login'}/>
      }    
    </>
  )

}
const ProtectedRoute2 = (props) => {

  const userAuthContext = useAuth()
  return(
    <>
      {
        userAuthContext.isLogin === false ? props.children : <Navigate to={'/anasayfa'}/>
      }    
    </>
  )

}

const App = () => {

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path='/login' element={<ProtectedRoute2><Login/></ProtectedRoute2>}></Route>
          <Route path='/' element={<ProtectedRoute2><Login/></ProtectedRoute2>}></Route>
          <Route path='/anasayfa' element={<ProtectedRoute1><AnaSayfa/></ProtectedRoute1>}></Route>
          <Route path='/kanban' element={<ProtectedRoute1><KanbanPanosu/></ProtectedRoute1>}></Route>
          <Route path='/ayarlar' element={<ProtectedRoute1><Ayarlar/></ProtectedRoute1>}></Route>
          <Route path='/ticket/:id' element={<ProtectedRoute1><TicketPage/></ProtectedRoute1>}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;