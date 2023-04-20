import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
    <ul className="friend-list">
{/* {friends.map(({id, avatar, name, isOnline}) => (
    <li className="item">{id}
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
)
)} */}

    </ul>
    )

}


FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};