import { useEffect } from 'react';
import './App.css'
import { useAppContext } from './context/Appcontext'
import axios from 'axios';

function App() {
  const { user } = useAppContext();
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        console.log('User data fetched:', response.data);
      }).catch(error => {
        console.error('Error fetching user data:', error);})
      }, []);

  return (
    <>
      <h1 className={'bg-red'} id={user?.id ?? ''}>Welcome Abishaaaa to My App</h1>
      <p>Aalaga irukiga neega sirikkum poothu {user?.name}</p>
      <button onClick={() => alert('Button clicked!')}>Click Me!</button>
    </>
  )
}

export default App;
