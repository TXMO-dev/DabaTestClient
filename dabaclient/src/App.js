import { Route, Routes, BrowserRouter as Router,Navigate} from 'react-router-dom';
import {RegisterPage} from './pages/register.pages';  
import {LoginPage} from './pages/login.pages';
import {DashboardPage} from './pages/dashboard.pages';
import {PersonalPage} from './pages/personal.pages';
import {EditInfo} from './pages/editinfo.pages';
import {useQuery,gql} from '@apollo/client';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn{
    isLoggedin @client
  }`;

function App() {
  const {data} = useQuery(IS_LOGGED_IN);
  return (
    <Router>
      <Routes>
      <Route exact path='' element={data.isLoggedin ? <Navigate to="/dashboard"/> : <RegisterPage/>} />
      <Route exact path='login' element={data.isLoggedin ? <Navigate to="/dashboard"/> :<LoginPage/>} />
      <Route path='dashboard' element={<DashboardPage/>}>
        <Route exact path='' element={<PersonalPage/>}/>
        <Route exact path='editinfo' element={<EditInfo/>}/>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
