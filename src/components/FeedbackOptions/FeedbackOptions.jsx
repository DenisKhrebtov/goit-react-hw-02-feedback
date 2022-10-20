import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <li key={option}>
          <Button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          ></Button>
        </li>
      ))}
    </div>
  );
};
