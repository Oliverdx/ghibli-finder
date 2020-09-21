import styles from './style.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <a href="/" className={styles.sidebar_logo}>
        <img src="/img/logo.png" alt="Ghibli Finder" />
      </a>
      <a href="/favoritos" className={styles.bookmarkLink}>
        <span className={styles.icon}>
          <img src="/img/heart_filled.png" alt="heart icon" className={styles.iconImage} />
        </span>
        <span>Bookmarks</span>
      </a>
    </div>
  );
};

export default SideBar;