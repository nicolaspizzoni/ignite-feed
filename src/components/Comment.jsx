import { useState } from 'react'
import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0)

    function handleLike(){
        setLikeCount(prevState => prevState + 1)
    }

    return(
        <div className={styles.comment}>
            <Avatar source="https://github.com//nicolaspizzoni.png" alt="Imagem de perfil" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Nicolas Pizzoni</strong>
                            <time title="11 de Maio ás 08:33h" dateTime="2022-05-11 08:33:30">Cerca de 2h atrás</time>
                        </div>
                        <button onClick={onDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLike}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}