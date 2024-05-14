import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positivePercentage = Math.round((good / totalFeedback) * 100);

  return (
    <div className={styles.feedback}>
      <h2>Feedback statistics:</h2>
      <ul className={styles.statistics}>
        <li className={styles.feedbackListItem}>Good: {good}</li>
        <li className={styles.feedbackListItem}>Neutral: {neutral}</li>
        <li className={styles.feedbackListItem}>Bad: {bad}</li>
        <li className={styles.feedbackListItem}>Total: {totalFeedback}</li>
        <li className={styles.feedbackListItem}>
          Positive feedback: {positivePercentage}%
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
};

export default Feedback;
