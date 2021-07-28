
import './App.css';
import styles from './style.css';
import king from './king.jpg';


function App() {
  return (
    <div className="App">
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}/>
    <h1 className="title red">Hazem</h1>
    <br />
    <img src={king} alt="Logo" />;
    {/* <img  width="100px"  height="100px" src="/king.jpg" ></img> */}
    <br />
    
    <img src={process.env.PUBLIC_URL + '/hazem.png'} /> 
    <br />
    <iframe width="956" height="538" src="https://www.youtube.com/embed/i51SpN7jsck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;
