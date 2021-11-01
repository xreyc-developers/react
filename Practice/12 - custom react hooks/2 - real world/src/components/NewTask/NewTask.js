import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const {isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url: 'https://react-practice-88e06-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
          'Content-Type': 'application/json',
        }
      },
      createTask.bind(null, taskText)
    )
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;


// setIsLoading(true);
// setError(null);
// try {
//   const response = await fetch(
//     'https://react-practice-88e06-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
//     {
//       method: 'POST',
//       body: JSON.stringify({ text: taskText }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   );

// if (!response.ok) {
//   throw new Error('Request failed!');
// }

// const data = await response.json();

// const generatedId = taskData.name; // firebase-specific => "name" contains generated id
// const createdTask = { id: generatedId, text: taskText };
// props.onAddTask(createdTask);
// } catch (err) {
//   setError(err.message || 'Something went wrong!');
// }
// setIsLoading(false);