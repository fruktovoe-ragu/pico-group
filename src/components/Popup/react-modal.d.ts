import { Component } from 'react';
import { ReactModalProps } from 'react-modal';

declare module 'react-modal' {
  interface ReactModal extends Component<ReactModalProps> {
    refs?: Record<string, any>;
  }

  const Modal: React.ComponentClass<ReactModalProps> & {
    setAppElement: (appElement: string | HTMLElement) => void;
  };

  export default Modal;
}
