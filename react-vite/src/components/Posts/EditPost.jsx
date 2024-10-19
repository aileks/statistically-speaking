import { useEffect, useState } from 'react';
import * as d3 from 'd3';

export default function EditPost({ post, fetcher, setEditingPostId }) {
  const csvUrl = post.graph.url;
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);
  const [editedType, setEditedType] = useState(post.graph.type);
  const [errors, setErrors] = useState({});
  const [columns, setColumns] = useState([]);
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const fetchCsvData = async () => {
      try {
        const csvData = await d3.csv(csvUrl);

        const columnNames = Object.keys(csvData[0]);
        setColumns(columnNames);

        setXAxis(columnNames[0]);
        setYAxis(columnNames[1]);
      } catch (err) {
        console.err('Error fetching or parsing CSV:', err);
      }
    };

    fetchCsvData();
  }, [csvUrl]);

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data) {
      if (fetcher.data.message) {
        setErrors({ message: fetcher.data.message });
      } else {
        setEditingPostId(-1);
        fetcher.data = undefined;
      }
    }
  }, [fetcher.data, fetcher.state, setEditingPostId]);

  useEffect(() => {
    setDisabled(editedBody === '' || editedTitle === '');
  }, [editedBody, editedTitle]);

  const handleErrors = () => {
    const newErrors = {};

    if (!editedTitle.length) {
      newErrors.title = 'Title is required';
    } else if (editedTitle.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    } else if (editedTitle.length > 50) {
      newErrors.title = 'Title cannot be more than 50 characters';
    }

    if (!editedBody.length) {
      newErrors.body = 'Post body is required';
    } else if (editedBody.length < 10) {
      newErrors.body = 'Post must be at least 10 characters';
    } else if (editedBody.length > 1500) {
      newErrors.body = 'Post cannot be more than 1500 characters';
    }

    if (!xAxis || !yAxis) {
      newErrors.axis = 'You must select both x-axis and y-axis columns';
    }

    return newErrors;
  };

  const handleUpdate = async id => {
    setErrors({});
    const newErrors = handleErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await fetcher.submit(
        {
          id,
          title: editedTitle,
          body: editedBody,
          graph_type: editedType,
          x_axis: xAxis || null,
          y_axis: yAxis || null,
        },
        { method: 'PUT', action: '/edit' }
      );
    } catch (err) {
      console.error(err);
      setErrors({
        message: err.message || 'An error occurred while creating the post',
      });
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <input
        type='text'
        value={editedTitle}
        onChange={e => setEditedTitle(e.target.value)}
        className='rounded-md border border-gray-400 bg-white p-3'
      />

      {errors.title && (
        <p className='text-sm italic text-red-500'>{errors.title}</p>
      )}

      <textarea
        value={editedBody}
        onChange={e => setEditedBody(e.target.value)}
        rows={5}
        className='rounded-md border border-gray-400 bg-white p-3'
      />
      {errors.body && (
        <p className='text-sm italic text-red-500'>{errors.body}</p>
      )}

      <label>
        Graph Type:
        <select
          value={editedType}
          onChange={e => setEditedType(e.target.value)}
          className='ml-2 rounded-md border border-gray-400 bg-white px-1'
        >
          <option value='table'>Table</option>
          <option value='bar'>Bar</option>
          <option value='line'>Line</option>
        </select>
      </label>

      {errors.message && (
        <p className='text-sm italic text-red-500'>{errors.message}</p>
      )}

      {(post.graph.type === 'bar' || post.graph.type === 'line') &&
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

      <div className='self-end space-x-3'>
        <button
          onClick={() => handleUpdate(post.id)}
          className='btn-save disabled:cursor-not-allowed disabled:opacity-50'
          disabled={disabled}
        >
          Save
        </button>

        <button
          onClick={() => setEditingPostId(-1)}
          className='btn-delete'
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
