
import { Routes, Route } from 'react-router-dom';
import { HomeScreen, AboutScreen, ErrorScreen } from '../views/index'
import { NavigateApp } from '../components/NavigateApp';
import RegisterClient  from '../views/RegisterClient'
import RecoverPassScreen  from '../views/RecoverPassScreen'
import ResetPassword from '../views/ResetPassword';
import TeamSections from '../views/TeamSections'

const RouterApp = () => {
  return (
    <>
    <NavigateApp />
    <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/register' element={<RegisterClient />} />
        <Route path='/recoverpass' element={<RecoverPassScreen />} />
        <Route path='/resetpassword' element={<ResetPassword/>} />
        <Route path='/teamsymplia' element={<TeamSections/>} />
        <Route path='*' element={<ErrorScreen />} />
    </Routes>
    </>
  );
};

export default RouterApp