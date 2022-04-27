import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './style.css';
import { Button, Radio, Space } from 'antd';
import { useNavigate } from 'react-router';

function Question(props) {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);

  const [answer, setAnswer] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const answers = props.question.answersList.map(item => (
    <Radio className="answers__answer" name="answer" value={item.answerId} key={item.answerId}>
      {item.answerText}
    </Radio>
  ));

  const onClick = () => {
    setCounter(counter + 1);
    navigate('/game-finish');
  };

  return (
    <div className="question">
      <div className="question__content">
        <header className="question__title">
          {`Question № ${counter}`}
        </header>
        <p className="question__text">
          {props.question.questionText}
        </p>
      </div>
      <div className="question__answers">
        <Radio.Group
          className="question__answers__radio"
          onChange={e => {
            setAnswer(e.target.value);
            setDisabled(false);
          }}
          value={answer}
          size="large"
        >
          <Space direction="vertical">
            {answers}
          </Space>
        </Radio.Group>
      </div>
      <Button
        type="primary"
        disabled={disabled}
        shape="round"
        className="answer-button"
        active
        onClick={onClick}
      >
        Answer
      </Button>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.exact({
    questionId: PropTypes.string,
    questionText: PropTypes.string,
    answersList: PropTypes.arrayOf(PropTypes.exact({
      answerId: PropTypes.string,
      answerText: PropTypes.string,
    })),
  }).isRequired,
};

export default Question;
