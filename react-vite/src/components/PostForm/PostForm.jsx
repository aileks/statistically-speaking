import { useState } from 'react';

export default function PostForm({ onPostSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const newPost = { title, body };

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });

    if (res.ok) {
      setTitle('');
      setBody('');
      onPostSubmit();
    } else {
      const error = await res.json();
      console.error(error);
    }
  };

  return (
    <form
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

      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder='Post'
        rows={5}
        required
        className='rounded-lg border border-gray-400 bg-white p-3'
      />

      <button
        type='submit'
        className='max-w-fit self-end btn'
      >
        Post
      </button>
    </form>
  );
}
