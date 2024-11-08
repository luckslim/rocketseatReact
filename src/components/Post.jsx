import { format , formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './comment';
import styles from './Post.module.css';
import { useState } from 'react';


export function Post({ author, publishedAt, content}){
    const publishDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR , 
        addSuffix: true, 
    })

    const [comments, setComments] = useState([
        'Post muito bacana hein!',
    ])

    const [newCommentText, setNewCommentText] = useState('');

    const isNewCommentEmpty = newCommentText.length == 0;

    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')        
    }
    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }
    function handleNewcommentInvalid(){
        event.target.setCustomValidity('isso deve ser preenchido!')
    }
    function deleteComment(commentToDelete){
        const commentWithoutDeleteOne = comments.filter(comment=>{
            return comment != commentToDelete;
        })
        setComments(commentWithoutDeleteOne);
    }
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header> 
            <div className={styles.content}>
                {content.map(line=>{
                    if (line.type = 'paragraph'){
                        return <p key={line.content} >{line.content}</p>
                    }else if (line.type ='link'){
                        return <p key={line.content} ><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Comentario...</strong>
                <textarea 
                onChange={handleNewCommentChange}
                onInvalid={handleNewcommentInvalid}
                name="comment" 
                placeholder='Deixe um comentario'
                value={newCommentText}

                required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment=>{
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    );
}