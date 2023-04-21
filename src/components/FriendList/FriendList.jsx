import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendBlock } from './FriendList.style';

export const FriendList = ({ friends }) => {
    return (
        <FriendBlock>
            {friends.map(({id, avatar, name, isOnline}) => { 
                return (
                    <FriendListItem key={id}
                        id={id}
                        avatar={avatar}
                        name={ name }
                        isOnline={ isOnline }/>)
                
            })}
    </FriendBlock>
    )

}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
