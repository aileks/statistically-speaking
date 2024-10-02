import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';

export default function PostForm() {
  const fetcher = useFetcher();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    setErrors({});

    const newErrors = {};

    if (!title.length) {
      newErrors.title = 'Title is required';
    } else if (title.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    } else if (title.length > 50) {
      newErrors.title = 'Title cannot be more than 50 characters';
    }

    if (!body.length) {
      newErrors.body = 'Post body is required';
    } else if (body.length < 10) {
      newErrors.body = 'Post must be at least 10 characters';
    } else if (body.length > 500) {
      newErrors.body = 'Post cannot be more than 500 characters';
    }

    setErrors(newErrors);

    if (!errors.title && !errors.body) {
      fetcher.submit({ title, body }, { method: 'POST', action: '/' });
    }
  };

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data?.success) {
      setTitle('');
      setBody('');
    }
  }, [fetcher]);

  return (
    <fetcher.Form
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
        className='rounded-lg border border-gray-400 bg-white p-3'
      />
      {errors.title && <p className='text-red-500'>{errors.title}</p>}

      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder='Post'
        rows={5}
        required
        className='rounded-lg border border-gray-400 bg-white p-3'
      />
      {errors.body && <p className='text-red-500'>{errors.body}</p>}

      <button
        type='submit'
        className='max-w-fit self-end btn'
      >
        Post
      </button>
    </fetcher.Form>
  );
}
