import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.friendList}>
        {/* Кількість li залежить від кількості об'єктів в масиві */}
        {friends.map(friend => (
          <li className={css.friendListItem} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
