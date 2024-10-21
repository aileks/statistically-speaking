import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useFetcher, useNavigate } from 'react-router-dom';
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
  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (fetcher.data && fetcher.data.message) {
      setErrors(() => ({ ...errors, message: fetcher.data.message }));
    }
  }, [fetcher.data]);

  const handleErrors = () => {
    setErrors({});
    const newErrors = {};

    if (isEditing) {
      if (editedCommentBody.length === 0) {
        newErrors.comment = 'Comment cannot be empty';
      }
    } else {
      if (commentBody.length === 0) {
        newErrors.comment = 'Comment cannot be empty';
      }
    }

    return newErrors;
  };

  const handleEdit = comment => {
    setIsEditing(true);
    setEditingCommentId(comment.id);
    setEditedCommentBody(comment.body);
  };

  const handleUpdateComment = async e => {
    e.preventDefault();
    const newErrors = handleErrors();

    if (Object.keys(newErrors).length === 0) {
      await fetcher.submit(
        { id: editingCommentId, comment_body: editedCommentBody },
        { method: 'PUT', action: `/comments/edit` },
      );

      setIsEditing(false);
      setEditedCommentBody('');
      setEditingCommentId(null);
      navigate('.');
    }

    setErrors(newErrors);
  };

  const handleDelete = async id => {
    await fetcher.submit(
      { id },
      { method: 'DELETE', action: '/comments/delete' },
    );

    navigate('.');
  };

  const openDeleteModal = id => {
    setModalContent(<DeleteModal onDelete={() => handleDelete(id)} />);
  };

  const handleAddComment = async e => {
    e.preventDefault();
    const newErrors = handleErrors();

    if (Object.keys(newErrors).length === 0) {
      fetcher.submit(
        { comment_body: commentBody },
        { method: 'POST', action: `/comments/${post.id}` },
      );

      setCommentBody('');
      e.target.reset();
    }

    setErrors(newErrors);
  };

  const formatCommentTime = (commentDate) => {
    const now = new Date();
    const commentTime = new Date(commentDate);
    const diffInSeconds = Math.floor((now - commentTime) / 1000);

    if (diffInSeconds < 60) {
      return 'Just now';
    } else if (diffInSeconds < 5 * 24 * 60 * 60) {
      const minutes = Math.floor(diffInSeconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
      if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return commentTime.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    }
  };

  return (
    <div className="mt-14">
      <h2 className="font-bold underline">Comments</h2>

      {user && (
        <form className="mt-4 flex flex-col">
          <textarea
            name="body"
            value={commentBody}
            onChange={e => setCommentBody(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
            rows={4}
            placeholder="Any thoughts?"
          ></textarea>
          {!isEditing && errors.comment && (
            <p className="text-red-500">{errors.comment}</p>
          )}

          <button
            onClick={handleAddComment}
            className="mt-2 self-end text-sm btn"
          >
            Add Comment
          </button>
        </form>
      )}

      {post.comments.length === 0 ?
        <p className="font-semibold text-gray-800">No comments yet</p>
        : post.comments.map(comment => (
          <div
            key={comment.id}
            className="mt-4 card"
          >
            {isEditing && editingCommentId === comment.id ?
              <form
                onSubmit={handleUpdateComment}
                className="mt-4 flex flex-col"
              >
                <textarea
                  name="body"
                  value={editedCommentBody}
                  onChange={e => setEditedCommentBody(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2"
                  rows={4}
                  placeholder="Edit your comment..."
                ></textarea>
                {errors.comment && (
                  <p className="text-red-500">{errors.comment}</p>
                )}

                <button
                  type="submit"
                  className="mt-2 self-end text-sm btn"
                >
                  Update Comment
                </button>
              </form>
              : <>
                <div className='flex justify-between mb-4'>
                  <Link
                    to={
                      user && user.username === comment.user.username ?
                        '/profile'
                        : `/user/${comment.user.id}`
                    }
                    className="text-sm text-slate-500 hover:text-slate-600 hover:underline"
                  >
                    {comment.user.username}
                  </Link>

                  <span className="text-xs text-gray-500">
                    {formatCommentTime(comment.createdAt)}
                  </span>
                </div>

                <p className="text-gray-800 mb-0 pb-0">{comment.body}</p>

                {user && user.id === comment.user.id && (
                  <div className="self-end space-x-3">
                    <button
                      onClick={() => handleEdit(comment)}
                      className="btn-edit"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => openDeleteModal(comment.id)}
                      className="btn-delete"
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
