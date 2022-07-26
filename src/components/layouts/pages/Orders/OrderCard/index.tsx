import { FC, useMemo } from 'react';
import { Card } from 'react-bootstrap';

// Types
import { IOrderCardProps } from './types';

const OrderCard: FC<IOrderCardProps> = ({ data }) => {
  const exceptions = useMemo(() => {
    return !data.exceptions?.length ? 'Ամեն ինչով': `Առանց ${data.exceptions.join(', ')}`;
  }, [data.exceptions]);

  return (
    <Card className="h-100" border="primary">
      <Card.Header>{data.creator.firstName} {data.creator.lastName}</Card.Header>
      <Card.Body>
        <Card.Title>{exceptions}</Card.Title>
        <Card.Text>
          {data.size}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
