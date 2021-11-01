import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    // THIS WILL RECEIVE THE TASK FROM THE HTTP REQUEST
    const transformTasks = (taskObj) => {
      const loadedTasks = [];
      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }
      setTasks(loadedTasks);
    };
    // GET DATA FROM THE SERVER USING PARAMETERS OF THE REACT HOOK
    fetchTasks(
      { url: "https://react-practice-88e06-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json" },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

// CONVERTED TO HOOK
// const fetchTasks = async (taskText) => {
//   setIsLoading(true);
//   setError(null);
//   try {
//     const response = await fetch(
//       'https://react-practice-88e06-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
//     );
// 
//     if (!response.ok) {
//       throw new Error('Request failed!');
//     }
// 
//     const data = await response.json();
// 
// 
//   } catch (err) {
//     setError(err.message || 'Something went wrong!');
//   }
//   setIsLoading(false);
// };