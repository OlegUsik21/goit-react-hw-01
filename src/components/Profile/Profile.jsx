import styles from "./Profile.module.css";

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={styles.profileBox} >
            <div className={styles.wrapper}> 
                <img className={styles.profileImg}
                    src={image}
                    alt="User avatar"
                />
                <p className={styles.profileName}>{name}</p>
                <p className={styles.profileItem}>@{tag}</p>
                <p className={styles.profileItem}>{location}</p>
            </div>

            <ul className={styles.profileList}>
                <li className={styles.listItem}>
                    <span className={styles.itemInfo}>Followers</span>
                    <span className={styles.infoStats}>{stats.followers}</span>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.itemInfo}>Views</span>
                    <span className={styles.infoStats}>{stats.views}</span>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.itemInfo}>Likes</span>
                    <span className={styles.infoStats}>{stats.likes}</span>
                </li>
            </ul>
        </div>);
};

export default Profile;