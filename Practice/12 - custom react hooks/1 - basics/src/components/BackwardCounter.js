import useCounter from '../hooks/use-counter';
import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;


// THIS IS CONVERTED TO REACT HOOKS
// const [counter, setCounter] = useState(0);
// 
// useEffect(() => {
//   const interval = setInterval(() => {
//     setCounter((prevCounter) => prevCounter - 1);
//   }, 1000);
// 
//   return () => clearInterval(interval);
// }, []);