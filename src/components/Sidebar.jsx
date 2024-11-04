import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            />
            <div className={styles.profile}>
                <img className={styles.avatar} 
                src="https://media.licdn.com/dms/image/v2/D4D03AQF3xLGMKCY8Rg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730505060009?e=1736380800&v=beta&t=KBoc7rzInKflsQpJ5Xi2tazqX0npyr1EhwmB_5R4FCI" 
                alt="" 
                />
                <strong>lucas soares</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>Editar seu Perfil</a>
            </footer>
        </aside>
    );
}