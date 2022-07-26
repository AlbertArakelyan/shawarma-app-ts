import { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

import { useAppDispatch } from '../../../store/configureStore';
import { RootState } from '../../../store/configureStore';

// Actions
import { getUser } from '../../../store/user/user.actions';

// Assets
import { shawarma2 } from '../../../assets/images';

// Constants
import { userRoles } from '../../../constants';

// Styles
import styles from './BaseLayout.module.css';


const BaseLayout = () => {
  const dispatch = useAppDispatch();

  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">Նոր Շաուրմա</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">Պատվիրել</Link>
              <Link className="nav-link" to="/my-orders">Իմ պատվերները</Link>
              {user?.role === userRoles.admin && (
                <Link className="nav-link" to="/orders">Պատվերներ</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main style={{ minHeight: 'calc(100vh - 128px)' }}>
        <div className={`mb-2 ${styles['shawarma-img-container']}`}>
          <img className={`d-block w-100 h-100 ${styles['shawarma-img']}`} src={shawarma2} alt="shawarma"/>
        </div>
        <Container>
          <div className="py-3">
            <Outlet />
          </div>
        </Container>
      </main>
      <footer className="bg-primary py-4">
        <Container>
          <div className="h-100 d-flex align-items-center">
            <span className="text-white">
              © 2022 New Shawarma, Inc.
            </span>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default BaseLayout;
