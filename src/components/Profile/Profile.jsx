import css from '../Profile/Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.userCard}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <div className={css.topWrap}>
          <p className={css.userName}>{name}</p>
          <p className={css.userTag}>@{tag}</p>
          <p className={css.userLocation}>{location}</p>
        </div>

        <ul className={css.statsList}>
          <li className={css.statsListItem}>
            <span>Followers</span>
            <span className={css.itemValue}>{followers}</span>
          </li>
          <li className={css.statsListItem}>
            <span>Views</span>
            <span className={css.itemValue}>{views}</span>
          </li>
          <li className={css.statsListItem}>
            <span>Likes</span>
            <span className={css.itemValue}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
