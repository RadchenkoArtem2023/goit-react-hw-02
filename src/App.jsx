import { useState, useEffect } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [feedbackGiven, setFeedbackGiven] = useState(false);

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    setFeedbackGiven(totalFeedback > 0);
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        onUpdateFeedback={updateFeedback}
        onResetFeedback={resetFeedback}
        feedbackGiven={feedbackGiven}
      />{" "}
      {feedbackGiven ? (
        <Feedback feedback={feedback} />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
};

export default App;
