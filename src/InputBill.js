export function InputBill({ bill, setBill }) {
  return (
    <div>
      <label>P nih bill mnh blok</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        placeholder="Your bill"
      ></input>
    </div>
  );
}
