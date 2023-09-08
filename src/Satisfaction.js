export function Satisfaction({ tip, setTip, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">very not satisfied (0%)</option>
        <option value="10">not satisfied (10%)</option>
        <option value="15">satisfied (15%)</option>
        <option value="20">very satisfied (20%)</option>
      </select>
    </div>
  );
}
