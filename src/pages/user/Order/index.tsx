import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

// Components
import OrderDetails from '../../../components/layouts/pages/Order/OrderDetails';
import OrderSummary from '../../../components/layouts/pages/Order/OrderSummary';

// Types
import { RootState } from '../../../store/configureStore';


const Order = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const fullName = useMemo(() => `${user?.firstName} ${user?.lastName}`, [user]);

  return (
    <div>
      <h3 className="text-primary fw-bold mb-3">
        Ողջույն {fullName}։ Ի՞նչ տեսակի շաուրմա կցանկանայիք ուտել այսօր։ 🌯
      </h3>
      <h4 className="text-secondary mb-2">
        Այս պահին աշխատում ենք միայն Bon appetite֊ի հետ, բայց խոստանում ենք, որ մեզ կմիանան նոր գործընկերներ։
      </h4>
      <Row>
        <Col sm={12} lg={8}>
          <OrderDetails />
        </Col>
        <Col className="mt-2 mt-lg-0" sm={12} lg={4}>
          <div className="border border-2 border-primary rounded p-3">
            <OrderSummary  />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Order;
