import React from 'react';
import { SpanContainer } from './StatisticsSection.modules';
export const StatisticsSection = ({ stat }) => (
  <SpanContainer>
    <span>Good:{stat.good}</span>
    <span>Neutral: {stat.neutral}</span>
    <span>Bad:{stat.bad}</span>
    <span>Total:{}</span>
    <span>Positive feedback:{stat.percentage}</span>
  </SpanContainer>
);
