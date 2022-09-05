import { MouseEvent, useState } from 'react'
import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: MouseEvent<HTMLButtonElement>) => void;
}

export function Comment({content, onDeleteComment}:CommentProps){
    const [likeCount, setLikeCount] = useState(0)

    function handleLike(){
        // Closure no React
        // prevState => prevState acessa o valor mais recente do estado sem precisar aguardar um novo contexto
        setLikeCount(prevState => prevState + 1)

        // Não atualiza de 3 em 3 pois os setLikeCount's estão atuando no mesmo contexto onde likeCount é 0 e não foi ainda atualizado para 1
        // setLikeCount(likeCount + 1)
        // setLikeCount(likeCount + 1)
        // setLikeCount(likeCount + 1)
    }

    return(
        <div className={styles.comment}>
            <Avatar src="https://github.com//nicolaspizzoni.png" alt="Imagem de perfil" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Nicolas Pizzoni</strong>
                            <time title="11 de Maio ás 08:33h" dateTime="2022-05-11 08:33:30">Agora</time>
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