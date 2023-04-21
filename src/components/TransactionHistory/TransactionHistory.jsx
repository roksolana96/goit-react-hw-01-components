import PropTypes from 'prop-types';
import {
  TableBlock,
  TableHeader,
  TableBody,
  TableElement} from './TransactionHistory.style';

export const TransactionHistory = ({items}) => {
  return (
    <TableBlock>
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableElement key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableElement>
          );
        })}
      </TableBody>
    </TableBlock>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
          })
        ).isRequired,
};