import PropTypes from 'prop-types';
import cl from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <li>
      {<span className={`${cl.status} ${friend.isOnline && cl.online}`}></span>}
      <img src={friend.avatar} alt={friend.name} width="48" />
      <p>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
