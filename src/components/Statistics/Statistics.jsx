import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.statWrapper}>
        <p className={css.stat}>
          Good: <span className={css.value}>{good}</span>
        </p>
        <p className={css.stat}>
          Neutral: <span className={css.value}>{neutral}</span>
        </p>
        <p className={css.stat}>
          Bad: <span className={css.value}>{bad}</span>{' '}
        </p>
        <p className={css.stat}>
          Total: <span className={css.value}>{total}</span>{' '}
        </p>
      </div>
      <div className={css.posiWrapper}>
        <p className={css.stat}>
          Positive feedback:{' '}
          <span className={css.value}>{positivePercentage}%</span>
        </p>
        <progress
          className={css.scale}
          max="100"
          value={positivePercentage}
        ></progress>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
