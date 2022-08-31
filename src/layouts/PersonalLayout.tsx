import { Outlet } from 'react-router-dom';
import PersonalFooter from '../components/personalFooter';
import PersonalNavBar from '../components/personalNavbar';

const PersonalLayout = () => {
  return (
    <div>
      <PersonalNavBar />
      <Outlet />
      <PersonalFooter />
    </div>
  )
}

export default PersonalLayout