import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Sidebar from '../../components/sidebar/sidebar';
import styles from './film.module.scss';
import useFilmSingle from '../../hooks/useFilmSingle';

const Film = (): React.ReactElement => {

  const router = useRouter();
  const { slug } = router.query;

  const [loading, setLoading] = useState(true);
  const { data, getFilmData } = useFilmSingle();

  useEffect(() => {
    if (!data?.filmData || !data?.casting.length) {
      getFilmData(slug.toString());
    }

    if (data)
      setLoading(false);

  }, [data]);

  return (
    <div className='container'>
      <Sidebar />
      {loading ?
        <div className='content-wrapper'>
          LOADING...
        </div>
        :
        <div className='content-wrapper'>
          <header className={styles.filmHeader}>
            <h1 className={styles.filmTitle}>{data?.filmData?.title}</h1>
            <button className={styles.bookmark}>
              <img src="/img/heart.png" alt="heart icon" className={styles.iconImage} />
            </button>
            <div className={styles.release}>
              {data?.filmData?.release_date}
            </div>
            <div className={styles.score}>
              <img src="/img/rotten_tomatoes.png" alt="Rotten Tomatoes" className={styles.score_logo} />
              <p className={styles.score_value}>{data?.filmData?.rt_score}</p>
            </div>
          </header>
          <main className={styles.filmContent}>
            <div className={styles.description}>
              <b>Description</b>
              <p>{data?.filmData?.description}</p>
            </div>
            <div className={styles.RightBox}>
              <div className={styles.casting}>
                <b>Personagens</b>
                <p>{data?.casting?.join(', ')}</p>
              </div>
              <div className={styles.director}>
                <b>Diretor</b>
                <p>{data?.filmData?.director}</p>
              </div>
              <div className={styles.producer}>
                <b>Produtor</b>
                <p>{data?.filmData?.producer}</p>
              </div>
            </div>
          </main>
        </div>}
    </div>
  );
};

export default Film;
