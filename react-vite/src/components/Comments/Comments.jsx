import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useFetcher, useNavigate } from 'react-router-dom';
import { useModal } from '../../context/Modal.jsx';
import DeleteModal from '../DeleteModal/index.js';

export default function Comments({ post }) {
  const user = useSelector(state => state.session.user);
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const { setModalContent } = useModal();
  const [commentBody, setCommentBody] = useState('');
  const [editedCommentBody, setEditedCommentBody] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);

  const handleEdit = comment => {
    setIsEditing(true);
    setEditingCommentId(comment.id);
    setEditedCommentBody(comment.body);
  };

  const handleUpdateComment = async e => {
    e.preventDefault();
    await fetcher.submit(
      { id: editingCommentId, comment_body: editedCommentBody },
      { method: 'PUT', action: `/comments/edit` }
    );
    setIsEditing(false);
    setEditedCommentBody('');
    setEditingCommentId(null);
    navigate('.');
  };

  const handleDelete = async id => {
    await fetcher.submit(
      { id },
      { method: 'DELETE', action: '/comments/delete' }
    );
    navigate('.');
  };

  const openDeleteModal = id => {
    setModalContent(<DeleteModal onDelete={() => handleDelete(id)} />);
  };

  const handleAddComment = async e => {
    e.preventDefault();
    fetcher.submit(
      { comment_body: commentBody },
      { method: 'POST', action: `/comments/${post.id}` }
    );
    setCommentBody('');
    e.target.reset();
  };

  return (
    <div className='mt-14'>
      <h2 className='font-bold underline'>Comments</h2>

      {user && (
        <form
          onSubmit={handleAddComment}
          className='mt-4 flex flex-col'
        >
          <textarea
            name='body'
            value={commentBody}
            onChange={e => setCommentBody(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded-md'
            rows={4}
            placeholder='Any thoughts?'
          ></textarea>

          <button
            type='submit'
            className='btn mt-2 text-sm self-end'
          >
            Add Comment
          </button>
        </form>
      )}

      {post.comments.length === 0 ?
        <p className='text-gray-800 font-semibold'>No comments yet</p>
      : post.comments.map(comment => (
          <div
            key={comment.id}
            className='mt-4 card'
          >
            {isEditing && editingCommentId === comment.id ?
              <form
                onSubmit={handleUpdateComment}
                className='mt-4 flex flex-col'
              >
                <textarea
                  name='body'
                  value={editedCommentBody}
                  onChange={e => setEditedCommentBody(e.target.value)}
                  className='w-full p-2 border border-gray-300 rounded-md'
                  rows={4}
                  placeholder='Edit your comment...'
                ></textarea>

                <button
                  type='submit'
                  className='btn mt-2 text-sm self-end'
                >
                  Update Comment
                </button>
              </form>
            : <>
                <p className='text-sm text-slate-500'>
                  {comment.user.username}
                </p>

                <p className='text-gray-800'>{comment.body}</p>

                {user && user.id === comment.user.id && (
                  <div className='self-end space-x-3'>
                    <button
                      onClick={() => handleEdit(comment)}
                      className='btn-edit'
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => openDeleteModal(comment.id)}
                      className='btn-delete'
                    >
                      Delete
                    </button>
                  </div>
                )}
              </>
            }
          </div>
        ))
      }
    </div>
  );
}
