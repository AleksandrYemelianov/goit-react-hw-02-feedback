import PropTypes from 'prop-types'
import css from './StatisticsFeedback.module.css';

const StatisticsFeedback = ({ feedbackItem: {good, neutral, bad}, total, positivePercentage }) => {
    return (
        <div>
            <ul className={css.list}>
                <li className={css.items}>
                    <p className={css.itemText}>Good: <span className={css.itemCount}>{good}</span></p>
                </li>
                <li className={css.items}>
                    <p className={css.itemText}>Neutral: <span className={css.itemCount}>{neutral}</span></p>
                </li>
                <li className={css.items}>
                    <p className={css.itemText}>Bad: <span className={css.itemCount}>{bad}</span></p>
                </li>
            </ul>
            <div className={css.info}>
                <p className={css.infoTotal}>Total: <span className={css.infoCount}>{total}</span></p>
                <p className={css.infoTotal}>Positive feedback: <span className={css.infoCount}>{positivePercentage()}%</span></p>
            </div>
        </div>
    )
}

export default StatisticsFeedback;

StatisticsFeedback.propTypes = {
    positivePercentage: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    feedbackItem : PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    })
}