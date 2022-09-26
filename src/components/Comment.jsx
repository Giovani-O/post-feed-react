import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

// It is possible to send functions from other components as props
// In this case, deleteComment is a function from Comment.jsx
export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/50748653?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gio Oliveira</strong>
              <time
                title="24 de setembro, 12h48"
                dateTime="2022-09-24 12:48:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Excluir comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
