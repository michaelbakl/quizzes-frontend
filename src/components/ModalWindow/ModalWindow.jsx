import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal } from 'antd';

import './style.css';

const ModalWindow = () => {
  const [visible, setVisible] = useState(false);
  const rules = useSelector(state => state.rulesReducer.rules.rules);
  const showModalWindow = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button className="modal__button" type="primary" shape="square" onClick={showModalWindow}>
        Rules
      </Button>
      <Modal
        title="Game rules"
        visible={visible}
        onOk={closeModal}
        onCancel={closeModal}
        footer={[
          <Button key="back" onClick={closeModal}>
            Got it!
          </Button>
        ]}
      >
        {rules}
      </Modal>
    </>
  );
};

export default ModalWindow;
