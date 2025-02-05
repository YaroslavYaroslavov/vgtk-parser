import './styled.css';

import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import usePortal from '../../hooks/use-portal';

const Modal = ({ active, setActive, children }) => {
  const handleCloseModal = () => {
    setActive(false);
  };

  const portal = usePortal();
  return (
    portal &&
    ReactDOM.createPortal(
      <div className={active ? 'modal active' : 'modal'} onClick={handleCloseModal}>
        <div
          className={active ? 'modal_content active' : 'modal_content'}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>,
      portal,
    )
  );
};
Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
export default Modal;
