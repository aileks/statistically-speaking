import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

export default function SaveIcon({ user, post }) {
  console.log(post);
  const fetcher = useFetcher();
  const [isSaved, setIsSaved] = useState(
    post.saves.some(save => save.userId === user.id)
  );

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data && !fetcher.data.message) {
      setIsSaved(fetcher.data.some(save => save.userId === user.id));
    }
  }, [fetcher.state, fetcher.data, post.id]);

  const handleSave = async e => {
    e.preventDefault();

    if (isSaved) {
      fetcher.submit(
        { postId: post.id },
        { method: 'DELETE', action: '/unsave' }
      );
    } else {
      fetcher.submit({ postId: post.id }, { method: 'POST', action: '/save' });
    }
  };

  return (
    <div
      onClick={e => handleSave(e)}
      className='flex max-w-fit cursor-pointer'
    >
      {isSaved ?
        <FaBookmark className='text-lg text-amber-600 transition-colors duration-200 ease-in-out hover:text-amber-700' />
      : <FaRegBookmark className='text-lg text-amber-600 transition-colors duration-200 ease-in-out hover:text-amber-700' />
      }
    </div>
  );
}
