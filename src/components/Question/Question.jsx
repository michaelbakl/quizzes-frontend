import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './style.css';
import { Button, Radio, Space } from 'antd';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion } from '../../actions/question/actions';
import { answerQuestion } from '../../actions/answer/actions';

function Question(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  const [answer, setAnswer] = useState(null);
  const [disabledAnswer, setDisabledAnswer] = useState(true);
  const [disabledRadios, setDisabledRadios] = useState(false);
  const [disabledNext, setDisabledNext] = useState(true);
  const [selected, setSelected] = useState(false);

  const questionId = useSelector(state => state.questionReducer.question.questionId);
  const answerResponse = useSelector(state => state.answerReducer.answerResponse);

  const answers = props.question.answersList.map(item => (
    // eslint-disable-next-line react/jsx-key
    <div id={`radio_${item.answerId}`}>
      <Radio
        className="answers__answer"
        name="answer"
        value={item.answerId}
        key={item.answerId}
        onClick={setAnswer}
      >
        {item.answerText}
      </Radio>
    </div>
  ));

  const MAX = props.questionsCount;

  const onClickAnswer = () => {
    setDisabledRadios(true);
    setDisabledNext(false);
    console.log(`Click answer: ${props.roomId}, ${questionId}, ${answer}`);
    dispatch(answerQuestion(props.roomId, questionId, answer));
    setSelected(true);
  };

  const onClickNext = () => {
    console.log(answerResponse);
    setDisabledAnswer(true);
    setDisabledNext(true);
    setDisabledRadios(false);
    setSelected(false);
    setCounter(props.questionNumber);
    if (counter < MAX && !Object.is('', answerResponse.questionId)) {
      dispatch(getQuestion(props.roomId, answerResponse.questionId));
    } else {
      navigate('/game-finish');
    }
  };

  const makeRed = () => {
    const elemText = document.getElementsByClassName('ant-radio-wrapper-checked')[0];
    if (elemText != null) {
      elemText.style.color = 'red';
    }
    const elemRightText = document.getElementById(`radio_${answerResponse.correctAnswerId}`);
    if (elemRightText != null) {
      elemRightText.children.item(0).style.color = 'green';
    }
  };

  const makeGreen = () => {
    const elemText = document.getElementsByClassName('ant-radio-wrapper-checked')[0];
    if (elemText != null) {
      elemText.style.color = 'green';
    }
  };

  const disableRadios = () => {
    const elemRadios = document.getElementsByClassName('ant-radio-input');
    if (elemRadios != null) {
      for (let i = 0; i < elemRadios.length; i++) {
        elemRadios[i].disabled = true;
      }
    }
  };

  useEffect(() => {
    if (selected) {
      if (Object.is(answer, answerResponse.correctAnswerId)) {
        makeGreen();
      } else {
        makeRed();
      }
      disableRadios();
    }
    if (Object.is(answer, answerResponse.correctAnswerId)) {
      makeGreen();
    }
    setCounter(props.questionNumber);
  }, [answer, answerResponse, makeRed, props.questionNumber, selected]);

  return (
    <div>
      <div className="question-wrapper">
        <div className="question-block">
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
                setDisabledAnswer(false);
              }}
              value={answer}
              size="large"
            >
              <Space direction="vertical">
                {answers}
              </Space>
            </Radio.Group>
          </div>
        </div>
      </div>
      {!selected ? (
        <Button
          type="primary"
          disabled={disabledAnswer}
          shape="round"
          className="answer-button"
          id="answer_button_1"
          onClick={onClickAnswer}
        >
          Answer
        </Button>
      ) : (
        <Button
          type="primary"
          disabled={disabledNext}
          shape="round"
          className="answer-button"
          id="answer_button_2"
          onClick={onClickNext}
        >
          Next
        </Button>
      )}
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
      points: PropTypes.number
    })),
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  roomId: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  questionsCount: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  questionNumber: PropTypes.number,
};

export default Question;
