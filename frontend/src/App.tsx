import { useState } from 'react';
import Pantalla from './componentes/pantalla';
import Teclado from './componentes/teclado';
import './App.css';

function App(){
  const [input, setInput] = useState('');
  const [operacion, setOperacion] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  return(
    <div className='app'>
      <Pantalla input={input} resultado={resultado} />
      <Teclado
        input={input}
        setInput={setInput}
        operacion={operacion}
        setOperacion={setOperacion}
        setResultado={setResultado}
        />
    </div>
  );
}

export default App;
