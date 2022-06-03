import './App.css';
import Formulario from './components/Formulario';

function App(){

  const datosPersona ={
    name:'Heidi',
    lastname:'Sánchez',
    number: 593989090655,
    email: 'heidi@somossigma.org',
  };

  return (
    <div className="App">
      <Formulario />
    </div>
  );
}

export default App;
