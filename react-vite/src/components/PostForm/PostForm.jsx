import { useState } from 'react';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });

    if (res.ok) {
      setTitle('');
      setBody('');
    } else {
      const error = await res.json();
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='my-6 p-4 bg-white shadow-md rounded-md flex flex-col container gap-4'
    >
      <input
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Title'
        required
        className='bg-white border border-gray-400 rounded-lg p-3'
      />

      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="What's on your mind?"
        required
        className='bg-white border border-gray-400 rounded-lg p-3'
      />

      <button
        type='submit'
        className='btn max-w-fit self-end'
      >
        Post
      </button>
    </form>
  );
}
