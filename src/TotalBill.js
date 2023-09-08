export function TotalBill({ Tips, bill }) {
  return (
    <h3>
      You pay ${bill + Tips} (${bill} + ${Tips} tip)
    </h3>
  );
}
