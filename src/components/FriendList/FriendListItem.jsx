import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {

    const friendStatus = isOnline ? styles.friendOnline : styles.friendOffline;
    
    return (
        <div className={styles.friend}>
            <img className={styles.friendImg} src={avatar} alt="Avatar" width="70" />
            <p className={styles.friendName}>{name}</p>
            <p className={friendStatus}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>

    );
};

export default FriendListItem;