import  { useState } from 'react';
import ComponenteA from './components/componenteA';
import ComponenteD from './components/componenteD';

const App = () => {
  const [resultado, setResultado] = useState(0);

  const handleOperacionSubmit = (v1, v2, operacion) => {
    let res = 0;

    if (operacion === '+') {
      res = v1 + v2;
    } else if (operacion === '-') {
      res = v1 - v2;
    } else if (operacion === '*') {
      res = v1 * v2;
    }

    setResultado(res);
  };

  return (
    <div>
      <ComponenteA onOperacionSubmit={handleOperacionSubmit} />
      <ComponenteD v1={handleOperacionSubmit.v1} v2={handleOperacionSubmit.v2} operacion={handleOperacionSubmit.operacion} resultado={resultado} />
    </div>
  );
};

export default App;
