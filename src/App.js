import './App.css';
import Tasks from './components/Tasks';

// Task list
// Add task, delete
// Task detail card

function App() {
  console.log('document.cookie', document.cookie)
  return (
    <div>
     <Tasks />
    </div>
  );
}

export default App;
