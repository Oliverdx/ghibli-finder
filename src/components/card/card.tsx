import { connect } from 'react-redux';

import { getFilmsBookmarked } from '../../redux/reducers/bookmarks';

import styles from './style.module.scss';

const Card = ({ data, isFavorite, handleFavoritos }: any): React.ReactElement => {

  if (!data) {
    return <></>;
  }

  const background = () => {
    const sortBg = Math.floor(Math.random() * 4) + 1;
    const color = ['--yellowgb', '--redgb', '--pinkbg', '--gray'];

    return {
      backgroundImage: `url(/img/figure_${sortBg}.png)`,
      backgroundColor: `var(${color[sortBg - 1]})`
    };
  };

  return (
    <div className={styles.card} style={background()}>
      <div className={styles.card_description}>
        <div className={styles.card_title}>
          <h2 className={styles.card_title__title}>
            <span>{data.title}</span>
          </h2>
          <button className={styles.card_title__bookmark} onClick={() => handleFavoritos(data.id)} >
            <img src={`/img/${isFavorite ? 'heart_filled.png' : 'heart.png'}`} alt="heart icon" className={styles.card_title__bookmark__icon} />
          </button>
          <h3 className={styles.card_title__director}>{data.director}</h3>
        </div>

        <p className={styles.card_description__text}>{data.description}</p>
        <a className={styles.card_readMore} href={`/film/${data.title}`}>Read More</a>
      </div>
    </div>
  );
};

const mapStateToProps = state => {

  return {
    bookmarks: getFilmsBookmarked(state),
  };
};

export default connect(mapStateToProps)(Card);