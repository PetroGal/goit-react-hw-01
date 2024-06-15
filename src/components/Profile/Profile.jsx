import '../Profile/Profile.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className="container">
      <div className="userCard">
        <img className="profileImage" src={image} alt="User avatar" />
        <div className="topWrap">
          <p className="userName">{name}</p>
          <p className="userTag">@{tag}</p>
          <p className="userLocation">{location}</p>
        </div>

        <ul className="statsList">
          <li className="statsList-item">
            <span>Followers</span>
            <span className="item-value">{followers}</span>
          </li>
          <li className="statsList-item">
            <span>Views</span>
            <span className="item-value">{views}</span>
          </li>
          <li className="statsList-item">
            <span>Likes</span>
            <span className="item-value">{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
