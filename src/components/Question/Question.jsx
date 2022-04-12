import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './style.css';
import { Button, Radio, Space } from 'antd';
import { useNavigate } from 'react-router';

function Question(props) {
  const navigate = useNavigate();

  const answers = props.question.answers.map((answer) => (
    // eslint-disable-next-line react/jsx-key
    <Radio value={answer.id}>{answer.text}</Radio>
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
        <Radio.Group>
          <Space direction="vertical">
            {answers}
          </Space>
        </Radio.Group>
        {/* eslint-disable-next-line no-alert */}
        <Button type="primary" shape="round" className="answer-button" active onClick={() => navigate('/game-finish')}>Answer</Button>
      </div>
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
