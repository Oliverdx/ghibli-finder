import styles from './style.module.scss';

const Card = ({ data }: any): React.ReactElement => {

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
          <button className={styles.card_title__bookmark}>
            <img src="/img/heart.png" alt="heart icon" className={styles.card_title__bookmark__icon} />
          </button>
          <h3 className={styles.card_title__director}>{data.director}</h3>
        </div>

        <p className={styles.card_description__text}>{data.description}</p>
        <a className={styles.card_readMore} href={`/film/${data.title}`}>Saiba Mais</a>
      </div>
    </div>
  );
};

export default Card;