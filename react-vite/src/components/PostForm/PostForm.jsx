import { useEffect, useRef, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as d3 from 'd3'; // for CSV parsing

export default function PostForm() {
  const user = useSelector(state => state.session.user);
  const fetcher = useFetcher();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({});
  const [csvFile, setCsvFile] = useState(null);
  const [graphType, setGraphType] = useState('table');
  const [csvData, setCsvData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (fetcher.data && fetcher.data.message) {
      setErrors(() => ({ ...errors, message: fetcher.data.message }));
    } else {
      setTitle('');
      setBody('');
      setCsvFile(null);
      setGraphType('table');
      setErrors({});
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  }, [fetcher.data]);

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.csv')) {
      setCsvFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        const parsedData = d3.csvParse(text);
        setCsvData(parsedData);
        setColumns(Object.keys(parsedData[0]));
        setXAxis('');
        setYAxis('');
      };
      reader.readAsText(file);
    }
  };

  const handleErrors = () => {
    const newErrors = {};

    if (!title.length) {
      newErrors.title = 'Title is required';
    } else if (title.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    } else if (title.length > 100) {
      newErrors.title = 'Title cannot be more than 100 characters';
    }

    if (!body.length) {
      newErrors.body = 'Post body is required';
    } else if (body.length < 20) {
      newErrors.body = 'Post must be at least 20 characters';
    } else if (body.length > 1500) {
      newErrors.body = 'Post cannot be more than 1500 characters';
    }

    if (!csvFile) {
      newErrors.csvFile = 'CSV file is required';
    } else if (!csvFile.name.endsWith('.csv')) {
      newErrors.csvFile = 'File must be a CSV';
    }

    if (!xAxis || !yAxis) {
      newErrors.axis = 'You must select both x-axis and y-axis columns';
    }

    return newErrors;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors({});
    const newErrors = handleErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('csv_file', csvFile);
    formData.append('graph_type', graphType);
    formData.append('x_axis', xAxis);
    formData.append('y_axis', yAxis);

    try {
      await fetcher.submit(formData, {
        method: 'POST',
        action: '/new',
        encType: 'multipart/form-data',
      });
    } catch (err) {
      console.error(err);
      setErrors({
        message: err.message || 'An error occurred while creating the post',
      });
    }
  };

  return (
    user && (
      <form
        method='POST'
        onSubmit={handleSubmit}
        className='container my-6 flex flex-col gap-4 rounded-md bg-white p-4 shadow-md'
      >
        <input
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Title'
          required
          className='rounded-md border border-gray-400 bg-white p-3'
        />
        {errors.title && (
          <p className='text-sm italic text-red-500'>{errors.title}</p>
        )}

        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder='Post'
          rows={5}
          required
          className='rounded-md border border-gray-400 bg-white p-3'
        />
        {errors.body && (
          <p className='text-sm italic text-red-500'>{errors.body}</p>
        )}

        <label>
          Graph Type:
          <select
            value={graphType}
            onChange={e => setGraphType(e.target.value)}
            className='ml-2 rounded-md border border-gray-400 bg-white px-1'
          >
            <option value='table'>Table</option>
            <option value='bar'>Bar</option>
            <option value='line'>Line</option>
          </select>
        </label>

        <div className='flex flex-col'>
          <input
            type='file'
            onChange={handleFileChange}
            accept='.csv'
            required
            className='rounded-md border border-gray-400 bg-white p-3'
            ref={fileInputRef}
          />

          <span className='mt-2 self-center text-xs font-semibold italic text-orange-600'>
            By uploading your data, you confirm that it has been cleaned and
            that any discrepancies or errors are solely due to the contents of
            your file.
          </span>
        </div>
        {errors.csvFile && (
          <p className='text-sm italic text-red-500'>{errors.csvFile}</p>
        )}

        {(graphType === 'bar' || graphType === 'line') &&
          columns.length > 0 && (
            <>
              <label>
                X-Axis:
                <select
                  value={xAxis}
                  onChange={e => setXAxis(e.target.value)}
                  className='ml-2 rounded-md border border-gray-400 bg-white px-1'
                >
                  <option
                    value=''
                    disabled
                  >
                    Select column
                  </option>
                  {columns.map(col => (
                    <option
                      key={col}
                      value={col}
                    >
                      {col}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Y-Axis:
                <select
                  value={yAxis}
                  onChange={e => setYAxis(e.target.value)}
                  className='ml-2 rounded-md border border-gray-400 bg-white px-1'
                >
                  <option
                    value=''
                    disabled
                  >
                    Select column
                  </option>
                  {columns.map(col => (
                    <option
                      key={col}
                      value={col}
                    >
                      {col}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}

        {errors.axis && (
          <p className='text-sm italic text-red-500'>{errors.axis}</p>
        )}

        {/* Submit Button */}
        <button
          type='submit'
          className='mt-3 max-w-fit self-end btn'
        >
          Post
        </button>
      </form>
    )
  );
}
