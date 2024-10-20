import { useState } from 'react';
import { Link, useFetcher } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditPost from './EditPost.jsx';
import SaveIcon from '../SaveIcon/index.js';
import { useToast } from '../../context/Toast';
import DeleteModal from '../DeleteModal/index';
import { useModal } from '../../context/Modal.jsx';

export default function AllPosts({ posts }) {
  const { addToast } = useToast();
  const { setModalContent } = useModal();
  const user = useSelector(state => state.session.user);
  const fetcher = useFetcher();
  const [editingPostId, setEditingPostId] = useState(-1);

  const handleEdit = (e, post) => {
    e.preventDefault();
    setEditingPostId(post.id);
  };

  const handleDelete = id => {
    fetcher.submit({ id }, { method: 'DELETE', action: '/delete' });
    addToast('Post deleted successfully!');
  };

  const openDeleteModal = (e, id) => {
    e.preventDefault();
    setModalContent(<DeleteModal onDelete={() => handleDelete(id)} />);
  };

  return (
    <div className='container'>
      <h2 className='text-2xl font-bold'>{user ? 'Your Feed' : 'Feed'}</h2>

      {posts.length ?
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
            : <Link
                className='flex flex-col'
                to={`/post/${post.id}`}
              >
                <div className='self-end'>
                  {user && (
                    <>
                      {user.id !== post.user.id ?
                        <SaveIcon
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
                            onClick={e => openDeleteModal(e, post.id)}
                            className='btn-delete'
                          >
                            Delete
                          </button>
                        </div>
                      }
                    </>
                  )}
                </div>

                <h3 className='font-bold underline'>{post.title}</h3>

                <Link
                  className='mb-3 w-fit text-sm text-slate-500 hover:text-slate-600 hover:underline'
                  onClick={e => e.stopPropagation()}
                  to={
                    user && post.user.username === user?.username ?
                      '/profile'
                    : `/user/${post.user.id}`
                  }
                >
                  by {post.user.username}
                </Link>

                <p className='text-sm'>{post.body}</p>

                <p className='mb-0 self-end text-sm text-slate-500 hover:text-slate-600 hover:underline'>
                  {post.comments.length} comments
                </p>
              </Link>
            }
          </div>
        ))
      : <h3 className='mt-8 text-center'>No posts found</h3>}
    </div>
  );
}
