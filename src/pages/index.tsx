import Sidebar from '../components/sidebar/sidebar';
import Card from '../components/card/card';
import styles from '../styles/Home.module.scss';

const Home = () => {

  const fakeData = {
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki"
  }

  return (
    <div className='container'>
      <Sidebar />
      <div className={styles.cardsWrapper}>
        <Card data={fakeData} />
      </div>
    </div>
  );
};

export default Home;
