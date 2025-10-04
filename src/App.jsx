import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


import LoginScreen from './views/LoginScreen'
import RouterApp from './routes/RouterApp';
import ProtectedRoutes from './routes/ProtectedRoutes';
import RegisterClient from './views/RegisterClient';
import RecoverPassScreen from './views/RecoverPassScreen';
import ResetPassword from './views/ResetPassword';

function App() {
  return (
    <>
    <div className='wallspaper bg-cover bg-bottom lg:bg-center w-full h-screen'>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={
          <ProtectedRoutes >
          <RouterApp />
          </ProtectedRoutes>
          }/>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterClient />} />
        <Route path='/recoverpass' element={<RecoverPassScreen />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App
