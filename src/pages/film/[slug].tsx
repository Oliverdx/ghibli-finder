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
    if (!data.filmData || !data.casting.length) {
      getFilmData(slug.toString());
      setLoading(false);
    }
  }, [data]);

  console.log(data);

  return (
    <div className='container'>
      <Sidebar />
      {loading ?
        <div className='content-wrapper'>
          LOADING DATA
        </div>
        :
        <div className='content-wrapper'>
          <header>
            <h1>{data?.filmData?.title}</h1> <button>Add aos Favoritos</button>
            <div className="realease">{data?.filmData?.release_date}</div>
            <div className="score">
              <p>Rotten Logo</p>
              <p>{data?.filmData?.rt_score}</p>
            </div>
          </header>
          <main>
            <div className="description">
              <b>Description</b>
              <p>{data?.filmData?.description}</p>
            </div>
            <div className="RightBox">
              <div className="casting">
                <b>Personagens</b>
                <p>{data?.casting?.join(', ')}</p>
              </div>
              <div className="director">
                <b>Diretor</b>
                <p>{data?.filmData?.director}</p>
              </div>
              <div className="producer">
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
