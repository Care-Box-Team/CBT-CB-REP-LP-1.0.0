import styles from "./box.module.css";

export const BoxContrusction: React.FC = () => {
  return (
    <section className={styles.boxContainer}>
      <div>
        <img src="/assets/SecondSection.png" alt="Carebox" />
      </div>
      <div className={styles.description}>
        <h2>Arma tu box</h2>
        <p>Complemento con elementos y personaliza tu box</p>
      </div>
    </section>
  );
};
