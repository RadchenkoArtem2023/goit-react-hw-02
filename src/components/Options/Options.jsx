import PropTypes from "prop-types";
import styles from "./Options.module.css";

const Options = ({ onUpdateFeedback, onResetFeedback, feedbackGiven }) => {
  const handleClick = (feedbackType) => {
    onUpdateFeedback(feedbackType);
  };

  return (
    <div className={styles.options}>
      <button className={styles.button} onClick={() => handleClick("good")}>
        Good
      </button>
      <button className={styles.button} onClick={() => handleClick("neutral")}>
        Neutral
      </button>
      <button className={styles.button} onClick={() => handleClick("bad")}>
        Bad
      </button>
      {feedbackGiven && (
        <button className={styles.resetButton} onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  onUpdateFeedback: PropTypes.func.isRequired,
};

export default Options;
