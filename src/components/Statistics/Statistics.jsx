import PropTypes from 'prop-types';
import {
  StatisticsBlock,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage} from './Statistics.styled'
export const Statistics = ({title, stats}) => {
    return (
<StatisticsBlock>
  <StatsTitle>{title}</StatsTitle>
  <StatsList>

 {stats.map(({ id, label, percentage }) => (
        <StatsItem key={id}>
        <StatsLabel>{label}</StatsLabel>
        <StatsPercentage>{percentage}%</StatsPercentage>
      </StatsItem>
 )
 )}


  </StatsList>
</StatisticsBlock>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired
};
