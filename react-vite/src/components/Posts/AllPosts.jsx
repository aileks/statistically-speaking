import { useState } from 'react';
import { Link, useFetcher } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditPost from './EditPost.jsx';
import SaveIcon from '../SaveIcon/index.js';
// import { useToast } from '../../context/Toast.jsx';

export default function AllPosts({ posts }) {
  // const { addToast } = useToast();
  const user = useSelector(state => state.session.user);
  const fetcher = useFetcher();
  const [editingPostId, setEditingPostId] = useState(-1);

  const handleEdit = (e, post) => {
    e.preventDefault();
    setEditingPostId(post.id);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();

    if (window.confirm('Are you sure you want to delete this post?')) {
      fetcher.submit({ id }, { method: 'DELETE', action: '/delete' });
      // addToast('Post deleted successfully!');
    }
  };

  return (
    <div className='container'>
      <h2 className='text-2xl font-bold'>{user ? 'Your Feed' : 'Feed'}</h2>

      {posts.length &&
        posts.map(post => (
          <div
            key={post.id}
            className='flex flex-col card'
          >
            {editingPostId === post.id ?
              <EditPost
                setEditingPostId={setEditingPostId}
                post={post}
                fetcher={fetcher}
              />
            : <Link to={`/post/${post.id}`}>
                <h3 className='font-bold underline'>{post.title}</h3>
                <p className='text-sm'>{post.body}</p>

                <div className='flex flex-col'>
                  {user && (
                    <>
                      {user.id !== post.userId ?
                        <SaveIcon
                          fetcher={fetcher}
                          post={post}
                          user={user}
                        />
                      : <div className='self-end space-x-3'>
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
                      }
                    </>
                  )}
                </div>
              </Link>
            }
          </div>
        ))}
    </div>
  );
}
