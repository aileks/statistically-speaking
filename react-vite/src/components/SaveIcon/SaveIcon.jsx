import { useEffect, useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

export default function SaveIcon({ user, post, fetcher }) {
  const [isSaved, setIsSaved] = useState(
    user.saves.some(save => save.postId === post.id)
  );

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data) {
      const updatedSaves = fetcher.data;
      setIsSaved(updatedSaves.some(save => save.postId === post.id));
    }
  }, [fetcher.state, fetcher.data, post.id]);

  const handleSave = async e => {
    e.preventDefault();

    if (isSaved) {
      try {
        fetcher.submit(
          { postId: post.id },
          { method: 'DELETE', action: '/unsave' }
        );
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        fetcher.submit(
          { postId: post.id },
          { method: 'POST', action: '/save' }
        );
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div
      onClick={e => handleSave(e)}
      className='flex'
    >
      {isSaved ?
        <FaBookmark className='text-amber-600 transition-colors duration-200 ease-in-out hover:text-amber-700' />
      : <FaRegBookmark className='text-amber-600 transition-colors duration-200 ease-in-out hover:text-amber-700' />
      }
    </div>
  );
}
