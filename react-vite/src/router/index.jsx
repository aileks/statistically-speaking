import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import NotFound from '../components/404.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import Index from '../components/Index';
import SinglePost from '../components/Posts/SinglePost';
import MyProfile from '../components/Profile';
import UserProfile from '../components/Profile/UserProfile.jsx';

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
        path: '/user/:userId',
        element: <UserProfile />,
        loader: async ({ params }) => {
          const { userId } = params;
          const res = await fetch(`/api/users/${userId}`);
          return res.json();
        },
      },
      {
        path: '/profile',
        element: <MyProfile />,
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

          return await res.json();
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

          return await res.json();
        },
      },
      {
        path: 'save',
        action: async ({ request }) => {
          const formData = await request.formData();

          const res = await fetch(`/api/posts/${formData.get('postId')}/save`, {
            method: 'POST',
          });

          return await res.json();
        },
      },
      {
        path: 'unsave',
        action: async ({ request }) => {
          const formData = await request.formData();

          const res = await fetch(`/api/posts/${formData.get('postId')}/save`, {
            method: 'DELETE',
          });

          return await res.json();
        },
      },
      {
        path: 'comments/:postId',
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const { postId } = params;

          const res = await fetch(`/api/posts/${postId}/comments`, {
            method: 'POST',
            body: formData,
          });

          return await res.json();
        },
      },
      {
        path: 'comments/delete',
        action: async ({ request }) => {
          const formData = await request.formData();

          const res = await fetch(`/api/comments/${formData.get('id')}`, {
            method: 'DELETE',
          });

          return await res.json();
        },
      },
      {
        path: 'comments/edit',
        action: async ({ request }) => {
          const formData = await request.formData();

          const res = await fetch(`/api/comments/${formData.get('id')}`, {
            method: 'PUT',
            body: formData,
          });

          return await res.json();
        },
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
