import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Index from '../components/Index';
import Post from '../components/Posts/';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Index />,
        loader: async () => {
          const res = await fetch('/api/posts');
          const data = await res.json();
          return data;
        },
        action: async ({ request }) => {
          try {
            const formData = await request.formData();
            const { _action, ...postData } = Object.fromEntries(formData);

            if (_action === 'DELETE') {
              const res = await fetch(`/api/posts/${postData.id}`, {
                method: 'DELETE',
              });

              if (!res.ok) {
                const errorData = await res.json();
                console.error('Error deleting post:', errorData);
                return { error: errorData };
              }

              return { success: true, message: 'Post deleted successfully' };
            } else {
              const res = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
              });

              if (!res.ok) {
                const errorData = await res.json();
                console.error('Error creating post:', errorData);
                return { error: errorData };
              }

              const newPost = await res.json();
              return { success: true, post: newPost };
            }
          } catch (error) {
            console.error('Error in post action:', error);
            return { error: { message: 'An unexpected error occurred' } };
          }
        },
      },
      {
        path: 'login',
        element: <LoginFormPage />,
      },
      {
        path: 'signup',
        element: <SignupFormPage />,
      },
      {
        path: 'post/:postId',
        element: <Post />,
        loader: async ({ params }) => {
          const { postId } = params;
          const res = await fetch(`/api/posts/${postId}`);
          const data = await res.json();
          return data;
        },
      },
    ],
  },
]);
