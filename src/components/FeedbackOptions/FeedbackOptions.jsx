import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackWrapper}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            key={option}
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            <div className={css.button_wrapper}>{option}</div>
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
