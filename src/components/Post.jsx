import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://github.com/diego3g.png" />	
					<div className={styles.authorInfo}>
						<strong>Tony Corleone</strong>
						<span>Web Developer</span>
					</div>
				</div>
				<time title='02 de fevereiro de 2025 às 8h13' dateTime='2025-02-02 11:05:23'>Publicado há 1h</time>
			</header>
			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
				<p>👉{' '}<a href="">jane.design/doctorcare</a></p>
				<p>
					<a href="">#novoprojeto</a>{' '}
					<a href="">#nlw</a>{' '}
					<a href="">#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea 
					placeholder='Deixe um comentário' 
				/>

				<footer>
					<button type='submit'>Comentar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	)
}