
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';
export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount]=useState(0);
    function handleDeleteComment(){
        onDeleteComment(content)
    }
    function handleLikeComment(){
        setLikeCount(likeCount+1);
    }
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
                        <button onClick={handleDeleteComment}title="deletar comentario">
                            <Trash size="20"/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                    <ThumbsUp size="20"/>
                    Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>    
    );
}