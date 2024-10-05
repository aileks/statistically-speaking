import { createContext, useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState(null);
  // callback function that will be called when modal is closing
  const [onModalClose, setOnModalClose] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalContent(null);
      setIsClosing(false);
      if (typeof onModalClose === 'function') {
        setOnModalClose(null);
        onModalClose();
      }
    }, 300);
  };

  const contextValue = {
    modalRef, // reference to modal div
    modalContent, // React component to render inside modal
    setModalContent, // function to set the React component to render inside modal
    setOnModalClose, // function to set the callback function called when modal is closing
    closeModal, // function to close the modal
    isClosing,
  };

  return (
    <>
      <ModalContext.Provider value={contextValue}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal() {
  const { modalRef, modalContent, closeModal, isClosing } =
    useContext(ModalContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (modalContent && !isClosing) {
      setIsVisible(true);
    } else if (isClosing) {
      setIsVisible(false);
    }
  }, [modalContent, isClosing]);

  if (!modalRef || !modalRef.current || (!modalContent && !isClosing))
    return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(closeModal, 300);
  };

  return ReactDOM.createPortal(
    modalContent && (
      <div
        id='modal'
        className='fixed inset-0 z-50 flex items-center justify-center'
      >
        <div
          id='modal-background'
          onClick={handleClose}
          className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
            isVisible ? 'opacity-50' : 'opacity-0'
          }`}
        />
        <div
          id='modal-content'
          className={`relative bg-white rounded-lg shadow-xl transition-all duration-300 ease-in-out transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          {modalContent}
        </div>
      </div>
    ),
    modalRef.current
  );
}

export const useModal = () => useContext(ModalContext);
