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
  {title && <StatsTitle>{title}</StatsTitle>}

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
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// Statistics.propTypes = {
//     title: PropTypes.string.isRequired,
//     stats: PropTypes.array.isRequired
// };