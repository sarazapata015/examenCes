import  { useState } from 'react';
import ComponenteB from './componenteB';

// eslint-disable-next-line react/prop-types
const ComponenteA = ({ onOperacionSubmit }) => {
  const [v1, setV1] = useState('');
  const [v2, setV2] = useState('');
  const [operacion, setOperacion] = useState('+');

  const handleV1Change = (e) => {
    setV1(e.target.value);
  };

  const handleV2Change = (e) => {
    setV2(e.target.value);
  };

  const handleOperacionChange = (e) => {
    setOperacion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOperacionSubmit(Number(v1), Number(v2), operacion);
  };

  return (
    <form>
      <div>
        <label>Valor 1:</label>
        <input type="text" value={v1} onChange={handleV1Change} />
      </div>
      <div>
        <label>Valor 2:</label>
        <input type="text" value={v2} onChange={handleV2Change} />
      </div>
      <ComponenteB operacion={operacion} onOperacionChange={handleOperacionChange} />
      <button type="submit" onClick={handleSubmit}>Calcular</button>
    </form>
  );
};

export default ComponenteA;
