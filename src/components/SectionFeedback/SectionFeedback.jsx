import PropTypes from 'prop-types';

import css from './SectionFeedback.module.css'

const SectionFeedback = ({ children, title }) => {
    return (
        <div className={css.section}>
            <h1 className={css.tittle}>{title}</h1>
            {children}
        </div>
    )
}

export default SectionFeedback;

SectionFeedback.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}