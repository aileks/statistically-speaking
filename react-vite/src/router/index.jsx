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
          const data = res.json();
          return data;
        },
      },
    ],
  },
]);
