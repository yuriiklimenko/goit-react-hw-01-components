import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  console.log(css);
  return (
    <ul className={css.friendList}>
      {/* {} -- бо ми рендеремо результат масиву*/}
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  // Масив об'єктів конкретного типа
  // для того щоб знати, що ми кинули масив в пропи, а не об'єкт
  friends: PropTypes.arrayOf(
    // тут в цьому обєкті нас цікавить тільки id
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};

export default FriendList;
