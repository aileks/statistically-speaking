import { createContext, useContext, useEffect, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const addToast = message => {
    setToast({ message, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  return (
    <ToastContext.Provider value={{ toast, addToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default function Toast() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (toast) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!toast) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 transition-all duration-500 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
    >
      <div className='rounded-sm bg-green-800 px-2 py-1 text-white shadow-lg'>
        {toast.message}
      </div>
    </div>
  );
}
