import React from 'react';
// import { SpanContainer } from './Statistics.module';
export const Statistics = ({ good, neutral, bad, total, positive }) => (
  <ul>
    <li>Good:{good}</li>
    <li>Neutral:{neutral}</li>
    <li>Bad:{bad}</li>
    <li>Total:{total}</li>
    <li>Positive Feedback:{positive}%</li>
  </ul>
);
