export function BarGraph({ data }) {
  console.log(data);
  const columns = data.columns;
  const rows = data.rows;
  return (
    <div className='mt-8'>
      <h2>Bar Graph Goes Here</h2>
    </div>
  );
}
