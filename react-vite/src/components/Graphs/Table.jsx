export default function Table({ data }) {
  const columns = data.columns;
  const rows = data.data;

  return (
    <div className='mt-8 max-h-96 overflow-auto'>
      <table className='min-w-full border border-gray-300 bg-white'>
        <thead>
          <tr className='bg-gray-100'>
            {columns.map((column, index) => (
              <th
                key={index}
                className='border-b px-4 py-2 text-left'
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className='border-b px-4 py-2'
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
