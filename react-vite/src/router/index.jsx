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
          return res.json();
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
          return res.json();
        },
      },
      {
        path: '/new',
        action: async ({ request }) => {
          const formData = await request.formData();

          try {
            const res = await fetch('/api/posts', {
              method: 'POST',
              body: formData,
            });

            return res.json();
          } catch (err) {
            console.error('Error in post action:', err);
            return err;
          }
        },
      },
      {
        path: '/delete',
        action: async ({ request }) => {
          const formData = await request.formData();

          try {
            const res = await fetch(`/api/posts/${formData.get('id')}`, {
              method: 'DELETE',
            });

            return res.json();
          } catch (err) {
            console.error('Error in post action:', err);
            return err;
          }
        },
      },
      {
        path: '/edit',
        action: async ({ request }) => {
          const formData = await request.formData();

          try {
            const res = await fetch(`/api/posts/${formData.get('id')}`, {
              method: 'PUT',
              body: formData,
            });

            return res.json();
          } catch (err) {
            console.error('Error in post action:', err);
            return err;
          }
        },
      },
    ],
  },
]);
