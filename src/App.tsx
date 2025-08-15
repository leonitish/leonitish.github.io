import './App.css'
import { useAppContext } from './context/Appcontext'

function App() {
  const { user } = useAppContext();
  return (
    <>
      <h1 className={'bg-red'} id={user?.id ?? ''}>Welcome {user?.name ?? 'Abishaaaa'} to My App</h1>
      <p>Aalaga irukiga neega sirikkum poothu {user?.name}</p>
      <button onClick={() => alert('Button clicked!')}>Click Me!</button>
    </>
  )
}

export default App;
