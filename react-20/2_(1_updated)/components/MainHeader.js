import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const activate = navData => navData.isActive ? classes.active : '';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink 
              className={activate} 
              to='/welcome'
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={activate} 
              to='/products'
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
