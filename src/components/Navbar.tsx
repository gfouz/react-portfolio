import styled from 'styled-components';
import { IRouteArray } from './constants';
import { useLocation } from 'react-router-dom';

function Navbar(props: IRouteArray) {
  const router = useLocation();
  const { pathname } = router;
  const navlinks = props.options.filter((item) => item.path !== pathname);

  return (
    <>
      <StyledNavbar>
        <div className='nav'>
          {navlinks.map((item, index) => (
            <ul className='nav__list' key={index}>
              <li className='nav__item'>
                <div className='nav__icon'>{item.icon}</div>
                <div className='nav__link'>{item.link}</div>
              </li>
            </ul>
          ))}
        </div>
      </StyledNavbar>
    </>
  );
}
export default Navbar;

const StyledNavbar = styled.div`
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  .nav__list {
    margin: 1em 0;
  }
  .nav__item {
    display: flex;
  }
  .nav__icon {
    color: white;
    margin: 1.3em 1em 0 1em;
  }
  .nav__link {
    margin: 1em 1em 0 0;
    color: white;
  }
`;
