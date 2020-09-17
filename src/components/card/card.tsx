import styles from './style.module.scss';

const Card = ({ data }: any): React.ReactElement => {

  if (!data) {
    return <></>;
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{data.title}</h2>
      <h3 className={styles.cardDirector}>{data.director}</h3>
      <div className="hidden-description">
        <p className={styles.cardDescription}>{data.description}</p>
        <a href={`/film/${data.title}`}>Veja Mais</a>
      </div>
    </div>
  );
};

export default Card;