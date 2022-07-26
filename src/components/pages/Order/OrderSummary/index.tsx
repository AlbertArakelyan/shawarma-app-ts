import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

import { RootState } from '../../../../store/configureStore';

const OrderSummary = () => {
  const { orderSummary } = useSelector((state: RootState) => state.order);

  const exceptionsConcated = useMemo(() => orderSummary.exceptions.join(', '), [orderSummary.exceptions]);

  return (
    <>
      <p>Պատվերի ամփոփում</p>
      <Form.Group>
        <span>Չափ</span>
        <Form.Control
          value={orderSummary.size}
          readOnly
        />
      </Form.Group>
      <Form.Group className="my-2">
        <span>Բացառություններ</span>
        <Form.Control
          value={exceptionsConcated || 'Ամեն ինչով'}
          readOnly
        />
      </Form.Group>
      <Form.Group>
        <span>Արժեք</span>
        <Form.Control
          value={1300}
          readOnly
        />
      </Form.Group>
    </>
  );
};

export default OrderSummary;
