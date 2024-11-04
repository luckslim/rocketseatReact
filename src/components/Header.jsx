import styles from './Header.module.css';

import igniteLogo from '../img/logo.svg';
console.log(igniteLogo)
export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do ignite" />
            <strong>IgniteFeed</strong>
        </header>
    )
}