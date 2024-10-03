import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import NotFound from '../components/404.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import Index from '../components/Index';
import SinglePost from '../components/Posts/SinglePost';
import Profile from '../components/Profile/index.js';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorBoundary />,
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
        path: 'post/:postId',
        element: <SinglePost />,
        loader: async ({ params }) => {
          const { postId } = params;
          const res = await fetch(`/api/posts/${postId}`);
          return res.json();
        },
      },
      {
        path: '/profile',
        element: <Profile />,
        loader: async () => {
          const res = await fetch('/api/posts');
          return res.json();
        },
      },
      {
        path: 'new',
        action: async ({ request }) => {
          const formData = await request.formData();

          const res = await fetch('/api/posts', {
            method: 'POST',
            body: formData,
          });

          return await res.json();
        },
      },
      {
        path: 'delete',
        action: async ({ request }) => {
          const formData = await request.formData();

          const res = await fetch(`/api/posts/${formData.get('id')}`, {
            method: 'DELETE',
          });

          return res.json();
        },
      },
      {
        path: 'edit',
        action: async ({ request }) => {
          const formData = await request.formData();

          const res = await fetch(`/api/posts/${formData.get('id')}`, {
            method: 'PUT',
            body: formData,
          });

          return res.json();
        },
      },
      {
        path: 'save',
        action: async ({ request }) => {
          const formData = await request.formData();

          const res = await fetch(`/api/posts/${formData.get('postId')}/save`, {
            method: 'POST',
          });

          return res.json();
        },
      },
      {
        path: 'unsave',
        action: async ({ request }) => {
          const formData = await request.formData();

          const res = await fetch(`/api/posts/${formData.get('postId')}/save`, {
            method: 'DELETE',
          });

          return res.json();
        },
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
