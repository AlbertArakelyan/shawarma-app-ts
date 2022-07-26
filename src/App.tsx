import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Pages
import { Auth, Order, Orders, MyOrders } from './pages';

// Components
import BaseLayout from './components/layouts/BaseLayout';

// Hooks
import { useAuth } from './hooks';


const App = () => {
  const { user } = useAuth();


  return (
    <div className="App">
      <Routes>
        {!user ? (
          <Route path="/" element={<Auth />} />
        ) : (
          <Route path="/" element={<BaseLayout />}>
            <Route path="/" element={<Order />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        )}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
