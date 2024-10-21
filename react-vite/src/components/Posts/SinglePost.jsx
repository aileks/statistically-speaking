import { Link, useFetcher, useLoaderData, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditPost from './EditPost';
import { useState } from 'react';
import SaveIcon from '../SaveIcon';
import { useToast } from '../../context/Toast';
import NotFound from '../404.jsx';
import Table from '../Graphs/Table';
import LineGraph from '../Graphs/LineGraph';
import BarGraph from '../Graphs/BarGraph';
import DeleteModal from '../DeleteModal';
import { useModal } from '../../context/Modal';
import Comments from '../Comments';
import { IoCloudDownload } from 'react-icons/io5';

export default function SinglePost() {
  const { addToast } = useToast();
  const { setModalContent } = useModal();
  const navigate = useNavigate();
  const post = useLoaderData();
  const fetcher = useFetcher();
  const user = useSelector(state => state.session.user);
  const graphType = post?.graph?.type;
  const [editingPostId, setEditingPostId] = useState(-1);

  const handleEdit = (e, post) => {
    e.preventDefault();
    setEditingPostId(post.id);
  };

  const handleDelete = async id => {
    await fetcher.submit({ id }, { method: 'DELETE', action: '/delete' });
    addToast('Post deleted successfully!');
    fetcher.load('/');
    setTimeout(() => navigate('/'), 100);
  };

  const openDeleteModal = id => {
    setModalContent(<DeleteModal onDelete={() => handleDelete(id)} />);
  };

  if (post.error === 'Post not found') return <NotFound />;

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

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

            <Link
              className='mb-3 w-fit text-sm text-slate-500 hover:text-slate-600 hover:underline'
              onClick={e => e.stopPropagation()}
              to={
                user && post.user?.username === user?.username ?
                  '/profile'
                : `/user/${post.user?.id}`
              }
            >
              by {post.user?.username} • {formattedDate}
            </Link>

            <p className='text-lg text-gray-800'>{post.body}</p>

            {user && (
              <>
                {user?.id !== post.user.id ?
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
                      onClick={() => openDeleteModal(post.id)}
                      className='btn-delete'
                    >
                      Delete
                    </button>
                  </div>
                }
              </>
            )}

            {graphType === 'table' && <Table data={post.dataframe} />}
            {graphType === 'bar' && <BarGraph data={post.dataframe} />}
            {graphType === 'line' && <LineGraph data={post.dataframe} />}
          </>
        }

        {user && (
          <a
            href={`${post.graph.url}`}
            download
            className='text-sm mt-6 mb-0 self-end text-green-700 transition-all duration-200 hover:text-green-800 hover:underline'
          >
            <IoCloudDownload className='inline-block mr-1' />
            Download Data
          </a>
        )}
      </div>

      <Comments post={post} />
    </div>
  );
}
