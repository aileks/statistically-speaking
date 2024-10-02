import { useState } from 'react';
import { Link, useFetcher } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AllPosts({ posts }) {
  const user = useSelector(state => state.session.user);
  const fetcher = useFetcher();
  const [editingPostId, setEditingPostId] = useState(-1);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');
  const [errors, setErrors] = useState({});

  console.log(editedTitle);
  console.log(editedBody);

  const handleEdit = (e, post) => {
    e.preventDefault();
    setEditingPostId(post.id);
    setEditedTitle(post.title);
    setEditedBody(post.body);
  };

  const handleSave = id => {
    setErrors({});

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
    } else if (editedBody.length > 500) {
      newErrors.body = 'Post cannot be more than 500 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        fetcher.submit(
          { id, title: editedTitle, body: editedBody },
          { method: 'PUT', action: '/edit' }
        );
      } catch (err) {
        console.error(err);
        setErrors({ message: err });
      }

      setEditingPostId(-1);
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();

    if (window.confirm('Are you sure you want to delete this post?')) {
      fetcher.submit({ id }, { method: 'DELETE', action: '/delete' });
    }
  };

  return (
    <div className='container'>
      <h2 className='text-2xl font-bold'>Your Feed</h2>

      {posts.length &&
        posts.map(post => (
          <div
            key={post.id}
            className='card flex flex-col'
          >
            {editingPostId === post.id ?
              <div className='flex flex-col gap-4'>
                <input
                  type='text'
                  value={editedTitle}
                  onChange={e => setEditedTitle(e.target.value)}
                  className='rounded-lg border border-gray-400 bg-white p-3'
                />
                {errors.title && (
                  <p className='text-red-500 text-sm italic'>{errors.title}</p>
                )}

                <textarea
                  value={editedBody}
                  onChange={e => setEditedBody(e.target.value)}
                  rows={5}
                  className='rounded-lg border border-gray-400 bg-white p-3'
                />
                {errors.body && (
                  <p className='text-red-500 text-sm italic'>{errors.body}</p>
                )}

                {errors.message && (
                  <p className='text-red-500 text-sm italic'>
                    {errors.message}
                  </p>
                )}

                <div className='space-x-3 self-end'>
                  <button
                    onClick={() => handleSave(post.id)}
                    className='btn-save'
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setEditingPostId(null)}
                    className='btn-delete'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            : <Link to={`/post/${post.id}`}>
                <h3 className='font-bold underline'>{post.title}</h3>
                <p className='text-sm'>{post.body}</p>

                <div className='flex flex-col'>
                  {user && user.id === post.user_id && (
                    <div className='space-x-3 self-end'>
                      <button
                        onClick={e => handleEdit(e, post)}
                        className='btn-edit'
                      >
                        Edit
                      </button>

                      <button
                        onClick={e => handleDelete(e, post.id)}
                        className='btn-delete'
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </Link>
            }
          </div>
        ))}
    </div>
  );
}
