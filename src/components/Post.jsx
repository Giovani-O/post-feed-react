import styles from './Post.module.css';

// Named Export
export function Post(props) {
  return (
    <div className={styles.post}>
      <article>
        <header>
          <div className={styles.author}>
            <img 
              className={styles.avatar}
              src="https://avatars.githubusercontent.com/u/50748653?v=4" 
              alt="Avatar" 
            />
            <div className={styles.authorInfo}>
              <strong>Gio Oliveira</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="24 de setembro, 12h48" dateTime="2022-09-24 12:48:30">
            Publicado a 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉{' '}<a href="#">gio.design/doctorcare</a></p>
          <p>
            <a href="#">#novoprojeto</a>{' '}
            <a href="#">#nlw</a>{' '}
            <a href="#">#rocketseat</a>{' '}
            </p>
        </div>
      </article>
    </div>
  )
}