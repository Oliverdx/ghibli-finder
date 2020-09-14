import Sidebar from '../components/sidebar/sidebar';
import styles from '../styles/Home.module.scss';

const Home = () => {

  return (
    <div className="container">
      <Sidebar />
      <div className={styles.cardsWrapper}></div>
    </div>
  );
};

export default Home;
