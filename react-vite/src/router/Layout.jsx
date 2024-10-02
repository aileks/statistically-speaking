import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal, ModalProvider } from '../context/Modal';
import { thunkAuthenticate } from '../redux/session';
import Navigation from '../components/Navigation/Navigation';
import Toast, { ToastProvider } from '../context/Toast.jsx';

export default function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <ToastProvider>
        <ModalProvider>
          <Navigation />
          {isLoaded && <Outlet />}
          <Modal />
          <Toast />
        </ModalProvider>
      </ToastProvider>
    </>
  );
}
