import styles from './header.module.css';
export const Header:React.FC = ()  => {

    return(
        <header className={styles.header}>
            <img src="/assets/Logo.png" height={32} width={32} alt="Carebox"/>
            <h1>Care<span>B</span>ox</h1>
        </header>
    )
}