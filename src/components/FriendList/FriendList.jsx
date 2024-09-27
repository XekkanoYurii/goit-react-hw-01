import FriendListItem from "./components/FriendListItem/FriendListItem.jsx";
import css from "./components/FriendList/FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={css.friendsWrapper}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </div>
  );
};

export default FriendList;