
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
export function Comment(){
    return (
        <div className={ styles.comment}>
            <Avatar hasBorder={false} src="https://br.web.img3.acsta.net/pictures/19/03/20/16/05/1007568.jpg" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego fernandez</strong>
                            <time title="11 de maio 2013" dateTime="2022-06-22">Cerca de 1hr Atrás</time>
                        </div>
                        <button title="deletar comentario">
                            <Trash size="20"/>
                        </button>
                    </header>
                    <p>muito bom, parabens!</p>
                </div>
                <footer>
                    <button>
                    <ThumbsUp size="20"/>
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>    
    );
}