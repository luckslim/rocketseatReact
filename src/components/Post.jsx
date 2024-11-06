import { Avatar } from './Avatar';
import { Comment } from './comment';
import styles from './Post.module.css';
export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://media.licdn.com/dms/image/v2/D4D03AQF3xLGMKCY8Rg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730505060009?e=1736380800&v=beta&t=KBoc7rzInKflsQpJ5Xi2tazqX0npyr1EhwmB_5R4FCI" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Lucas soares</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de maio 2013" dateTime="2022-06-22">publicado há 1H</time>
            </header> 
            <div className={styles.content}>
                <p>fala galera</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sequi blanditiis molestiae illo. Placeat commodi, odit iure quos beatae recusandae, ipsam quam veniam soluta molestiae nemo nihil officiis reiciendis atque?</p>
                <p><a href="">lucasdev/developer</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu Comentario...</strong>
                <textarea placeholder='Deixe um comentario'></textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>
    );
}