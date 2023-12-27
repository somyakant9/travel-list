import './index.css';
import Form from './Components/Form';
import Logo from './Components/Logo';
import PackingList from './Components/PackingList';
import Stats from './Components/Stats';

function App() {
  // let [items, setIems] = useState([]);

  return (
    <div className="app">
     <Logo/>
     <Form/>
     <PackingList/>
     <Stats/>
    </div>
  );
}

export default App;
