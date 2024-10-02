import { useFetcher, useLoaderData, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditPost from './EditPost';
import { useState } from 'react';
import SaveIcon from '../SaveIcon';
import { useToast } from '../../context/Toast';

export default function Post() {
  const { addToast } = useToast();
  const navigate = useNavigate();
  const post = useLoaderData();
  const fetcher = useFetcher();
  const user = useSelector(state => state.session.user);
  const [editingPostId, setEditingPostId] = useState(-1);

  const handleEdit = (e, post) => {
    e.preventDefault();
    setEditingPostId(post.id);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();

    if (window.confirm('Are you sure you want to delete this post?')) {
      fetcher.submit({ id }, { method: 'DELETE', action: '/delete' });
      addToast('Post deleted successfully!');
      fetcher.load('/');
      navigate('/');
    }
  };

  return (
    <div className='container'>
      <div className='mt-14 flex flex-col card'>
        {editingPostId === post.id ?
          <EditPost
            setEditingPostId={setEditingPostId}
            post={post}
            fetcher={fetcher}
          />
        : <>
            <h2 className='font-bold underline'>{post.title}</h2>

            <p className='text-lg'>{post.body}</p>

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
          </>
        }
      </div>
    </div>
  );
}
