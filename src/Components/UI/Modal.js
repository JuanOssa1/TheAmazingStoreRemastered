import { Fragment } from 'react';
import * as ReactDOM from 'react-dom';
//import { ReactDOM } from 'react-dom';
import React from 'react';
import classes from './Modal.module.scss';

function Backdrop({ onClose }) {
  return <div className={classes.backdrop} onClick={onClose} />;
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}
const portalElement = document.getElementById('overlays');

export default function Modal({ children, onClose }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
