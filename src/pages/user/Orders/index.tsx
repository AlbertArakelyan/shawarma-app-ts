import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { useAppDispatch } from '../../../store/configureStore';
import { RootState } from '../../../store/configureStore';

// Components
import OrderCard from '../../../components/pages/Orders/OrderCard';

// Actions
import { getOrders } from '../../../store/order/order.actions';

const Orders = () => {
  const dispatch = useAppDispatch();

  const { orders } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const ordersContent = (
    orders && orders.map((order) => {
      return (
        <Col key={order.id} className="mb-2" xl={3} lg={4} md={6} sm={12}>
          <OrderCard data={order} />
        </Col>
      )
    })
  );

  return (
    <div>
      <h2 className="text-primary mb-3">
        Գրանցված պատվերներ
      </h2>
      <Row>
        {ordersContent}
      </Row>
    </div>
  );
};

export default Orders;
