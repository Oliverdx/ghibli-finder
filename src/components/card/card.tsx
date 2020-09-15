import styles from './style.module.scss';

const Card = ({ data }) => {

  if (!data) {
    return <></>;
  };

  return (
    <div className={styles.card}>
      <h2>{data.title}</h2>
      <h3>{data.director}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default Card;