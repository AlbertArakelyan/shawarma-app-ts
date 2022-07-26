import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

import { useAppDispatch } from '../../../../../store/configureStore';

// Types
import { IOrderDetailsData } from '../../../../../types/order';

// Actions
import { createOrder, updateOrderSummary } from '../../../../../store/order/order.actions';

const OrderDetails = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, watch, reset } = useForm<IOrderDetailsData>({
    defaultValues: {
      exceptions: [],
    },
  });

  const { exceptions, size } = watch();

  const handleSubmitOrder = (data: IOrderDetailsData) => {
    dispatch(createOrder(data)).then(() => {
      reset();
    });
  };

  useEffect(() => {
    dispatch(updateOrderSummary({ size, exceptions: exceptions || [] }));
  }, [size, exceptions]);

  return (
    <div className="border border-2 border-primary rounded p-3">
      <Form onSubmit={handleSubmit(handleSubmitOrder)}>
        <Form.Group
          className="mb-3"
          controlId="size"
        >
          <Form.Label className="mb-0">Չափ</Form.Label>
          <Form.Select {...register('size', { required: true })}>
            <option value="Մեծ">Մեծ</option>
            {/*<option value="Փոքր">Փոքր</option>*/}
          </Form.Select>
        </Form.Group>
        <div>
          <span className="mb-0">Բացառություններ ❌</span>
          <Form.Group className="d-flex align-items-center justify-content-start" controlId="exception1">
            <Form.Check value="Սոխ" {...register('exceptions')} />
            <Form.Label className="mb-0 ms-2">Սոխ</Form.Label>
          </Form.Group>
          <Form.Group className="d-flex align-items-center justify-content-start" controlId="exception2">
            <Form.Check value="Կծու" {...register('exceptions')} />
            <Form.Label className="mb-0 ms-2">Կծու</Form.Label>
          </Form.Group>
          <Form.Group className="d-flex align-items-center justify-content-start" controlId="exception3">
            <Form.Check value="Կետչուպ" {...register('exceptions')} />
            <Form.Label className="mb-0 ms-2">Կետչուպ</Form.Label>
          </Form.Group>
          <Form.Group className="d-flex align-items-center justify-content-start" controlId="exception4">
            <Form.Check value="Մայոնեզ" {...register('exceptions')} />
            <Form.Label className="mb-0 ms-2">Մայոնեզ</Form.Label>
          </Form.Group>
        </div>
        <p className="my-2 text-secondary">
          *Շաուրման միայն լավաշով է
        </p>
        <Button type="submit" className="ms-auto d-block">
          Պատվիրել
        </Button>
      </Form>
    </div>
  );
};

export default OrderDetails;
