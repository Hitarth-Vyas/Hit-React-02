import useHttp from '../../hooks/use-http';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTasksRequest } = useHttp();
  
 

  const  enterTaskHandler = async (taskText) => {
    const createTask = (taskData) => {
      const generatedId = taskData.name;    // firebase specific => "name" contains generated id
      const createTask = { id: generatedId, text: taskText };
  
      props.onAddTasks(createTask);
    } 
  
    sendTasksRequest(
      { 
        url: 'https://react-15-eb1cf-default-rtdb.firebaseio.com/tasks.json',  
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-type': 'application/json',
        }
      }, 
      createTask.bind(null, taskText)            // used to pre-configure a function then it runs it 
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;