import Button from '../button/Button';

interface CounterProps {
  onDecrement: () => void;
  onIncrement: () => void;
}

function Counter(props: CounterProps) {
  return (
    <div>
      <Button onClick={props.onDecrement} style={{ margin: '50px 15px' }} type="outline">
        Decrement
      </Button>
      <Button onClick={props.onIncrement} style={{ margin: '50px 15px' }} type="outline">
        Increment
      </Button>
    </div>
  );
}

export default Counter;
