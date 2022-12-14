import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

export default function Post({ author, conteudo, publishedAt }) {
  const { avatarUrl, name, role } = author;

  const [comments, setComments] = useState([])

  const [newCommentText, setNewCommentText] = useState('')

  //   const publishedAtFormatted = new Intl.DateTimeFormat('pt-BR', {
  //     day: '2-digit',
  //     month: 'long',
  //     hour: '2-digit',
  //     minute: '2-digit'
  //   }).format(publishedAt)

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR});

  const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleSubmitForm(){
    // Pega o valor do target .nomeNaTag
    // event.target.comment.value

    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete){
    const newCommentList = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(newCommentList)
  }

  function invalidComment(){
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder source={avatarUrl} alt="Profile picture" />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {conteudo.map((item) => {
          if (item.type == "link") {
            return <p key={item.content}><a href="">{item.content}</a></p>;
          } else if (item.type == "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          }
        })}
      </div>
      <form onSubmit={handleSubmitForm} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea 
          onChange={handleNewCommentChange} 
          name="comment" 
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onInvalid={invalidComment}
          required
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {
          comments.map((comment) => {

            return(
              <Comment onDeleteComment={() => deleteComment(comment)} key={comment} content={comment} />
            )
          })
        }
      </div>
    </article>
  );
}
