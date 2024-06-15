import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function Friend({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendCard}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(
          css.friendStatus,
          isOnline && css.isOnline,
          !isOnline && css.isOffline
        )}
      >
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
