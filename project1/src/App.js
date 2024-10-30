import FirstElement from './Components/FirstElement'
import 'bootstrap/dist/css/bootstrap.min.css';
import Second from './Components/Second';
import { Button } from 'bootstrap';

function App() {
  return (
    <div className="App">
      <FirstElement />
      <Second>This is first line</Second>
      <Second ><button >Click Me</button></Second>
      <Second >This is second line</Second>
      <Second ><a href='/#'>Home</a></Second>
    </div>
  );
}

export default App;
