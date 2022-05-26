class QuizzException extends Error {
  constructor(errorCode, message) {
    super(errorCode, message);
    this.errorCode = errorCode;
    this.message = message;
  }
}
export default QuizzException;
