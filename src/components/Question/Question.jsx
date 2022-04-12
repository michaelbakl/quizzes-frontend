import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './style.css';
import { Button, Radio, Space } from 'antd';
import { useNavigate } from 'react-router';

function Question(props) {
  const navigate = useNavigate();

  const [answer, setAnswer] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const answers = props.question.answers.map((item) => (
    // eslint-disable-next-line react/jsx-key
    <Radio value={item.id}>{item.text}</Radio>
  ));

  return (
    <div className="question">
      <div className="question__content">
        <header className="question__title">
          {props.question.header}
        </header>
        <p className="question__text">
          {props.question.text}
        </p>
      </div>
      <div className="question__answers">
        <Radio.Group className="question__answers__radio" onChange={e => { setAnswer(e.target.value); setDisabled(false); }} value={answer} size="large">
          <Space direction="vertical">
            {answers}
          </Space>
        </Radio.Group>
      </div>
      <Button type="primary" disabled={disabled} shape="round" className="answer-button" active onClick={() => navigate('/game-finish')}>Answer</Button>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.exact({
    answers: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string,
      text: PropTypes.string,
    })),
    header: PropTypes.string,
    text: PropTypes.string,
  }).isRequired
};

export default Question;
