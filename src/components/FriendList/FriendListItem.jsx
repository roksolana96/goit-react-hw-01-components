import PropTypes from 'prop-types';
import { 
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName } from './FriendListItem.style';
export const FriendListItem = ({isOnline, avatar, name}) => {
    return (
<FriendItem>
  <FriendStatus status={isOnline}>{isOnline}</FriendStatus>
  <FriendAvatar src={avatar} alt="User avatar" width="48"/>
  <FriendName>{name}</FriendName>
</FriendItem>
)
}



FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };