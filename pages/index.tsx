import styles from '../styles/Home.module.scss';

const Home = () => {
  const foo = 'bar';

  return (
    <div className={styles.container}>
      Hello {foo}
    </div>
  );
};

export default Home;
