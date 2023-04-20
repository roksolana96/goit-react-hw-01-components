import PropTypes from 'prop-types';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return (
<li className="item">
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48"/>
  <p className="name">{name}</p>
</li>
)
}



// FriendListItem.propTypes = {
//     isOnline: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.array.isRequired
// };
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };