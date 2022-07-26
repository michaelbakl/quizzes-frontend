import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';

import './style.css';
import { getRules } from '../../actions/rules/actions';

const ModalWindow = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const rules = useSelector(state => state.rulesReducer.rules.rules);
  const showModalWindow = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  useEffect(() => {
    dispatch(getRules());
  }, [dispatch, rules]);

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
