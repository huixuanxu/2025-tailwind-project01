import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.banner}>
      <div className={styles.bannertext}>Home</div>
      <div className={styles.bannertext}>Character</div>
      <div className={styles.bannertext}>About</div>

    </header>
  );
}

export default Header;