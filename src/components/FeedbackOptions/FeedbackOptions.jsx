import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';


const FeedbackOptions = ({ options, handleIncrement }) => {
    return (
        <div className={css.btnGroup}>
            {options.map((option) => {
                return (
                    <button type='button' key={nanoid()} className={css.btn} onClick={() => handleIncrement(option)}>
                        {option}
                    </button>
                )
            })}
        </div>
    )
}


export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleIncrement: PropTypes.func.isRequired,
}