import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export default function Post({ author, conteudo, publishedAt }) {
  const { avatarUrl, name, role } = author;

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
            return <p><a href="">{item.content}</a></p>;
          } else if (item.type == "paragraph") {
            return <p>{item.content}</p>;
          }
        })}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
