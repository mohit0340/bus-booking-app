import { useNavigate } from 'react-router-dom';
import './App.css';
import Cover from "./assets/amitabcover.jpeg";
function App() {
const navigate=useNavigate()


  return (
    <div className="App container mt-2 mb-3s  d-flex justify-content-around">
     <div> <p>Travel<br></br>Where<br></br> You<br></br>Want!</p><button onClick={()=>navigate("/bookbus")}>Book Bus</button></div>
     <img src={Cover} width={650} height={400}></img>
   
    </div>
  );
}

export default App;
