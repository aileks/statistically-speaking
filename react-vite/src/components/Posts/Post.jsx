import { useFetcher, useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Post() {
  const post = useLoaderData();
  const fetcher = useFetcher();
  const user = useSelector(state => state.session.user);

  const handleDelete = (e, postId) => {
    e.preventDefault();

    if (window.confirm('Are you sure you want to delete this post?')) {
      fetcher.submit(
        { id: postId, _action: 'DELETE' },
        { method: 'POST', action: '/' }
      );
    }
  };

  const handleEdit = (e, postId) => {
    e.preventDefault();
    alert('Feature coming soon! Post ID: ' + postId);
  };

  return (
    <div className='container'>
      <div className='mt-14 card flex flex-col'>
        <h2 className='font-bold underline'>{post.title}</h2>

        <p className='text-lg'>{post.body}</p>

        {user && user.id === post.user_id && (
          <div className='space-x-3 self-end'>
            <button
              onClick={e => handleEdit(e, post.id)}
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
    </div>
  );
}
