import { Link, useFetcher } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AllPosts({ posts }) {
  const user = useSelector(state => state.session.user);
  const fetcher = useFetcher();

  const handleEdit = (e, postId) => {
    e.preventDefault();
    alert('Feature coming soon! Post ID: ' + postId);
  };

  const handleDelete = (e, postId) => {
    e.preventDefault();

    if (window.confirm('Are you sure you want to delete this post?')) {
      fetcher.submit(
        { id: postId, _action: 'DELETE' },
        { method: 'POST', action: '/' }
      );
    }
  };

  return (
    <div className='container'>
      <h2 className='text-2xl font-bold'>Your Feed</h2>

      {posts.length &&
        posts.map(post => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
          >
            <div className='card flex flex-col'>
              <h3 className='font-bold underline'>{post.title}</h3>

              <p className='text-sm'>{post.body}</p>

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
          </Link>
        ))}
    </div>
  );
}
