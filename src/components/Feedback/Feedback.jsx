import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div className={styles.feedback}>
      <h2>Feedback statistics:</h2>
      <ul className={styles.statistics}>
        <li className={styles.feedbackListItem}>Good: {good}</li>
        <li className={styles.feedbackListItem}>Neutral: {neutral}</li>
        <li className={styles.feedbackListItem}>Bad: {bad}</li>
        <li className={styles.feedbackListItem}>Total: {totalFeedback}</li>
        <li className={styles.feedbackListItem}>
          Positive feedback: {positiveFeedback}%
        </li>
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Feedback;
