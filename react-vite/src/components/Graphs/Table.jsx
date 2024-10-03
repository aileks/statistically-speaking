export default function Table({ data }) {
  const columns = data.columns;
  const rows = data.data;

  return (
    <div className='overflow-auto max-h-96 mt-8'>
      <table className='min-w-full bg-white border border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            {columns.map((column, index) => (
              <th
                key={index}
                className='px-4 py-2 border-b text-left'
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
                  className='px-4 py-2 border-b'
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
