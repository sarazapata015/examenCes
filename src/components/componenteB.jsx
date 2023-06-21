// eslint-disable-next-line react/prop-types
const ComponenteB = ({ operacion, onOperacionChange }) => {
  return (
    <div>
      <label>Operación:</label>
      <select value={operacion} onChange={onOperacionChange}>
        <option value="+">Sumar</option>
        <option value="-">Restar</option>
        <option value="*">Multiplicar</option>
      </select>
    </div>
  );
};

export default ComponenteB;


