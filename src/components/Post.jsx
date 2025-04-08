import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src="https://scontent.fcpq1-1.fna.fbcdn.net/v/t1.6435-1/130551099_104040914916928_7863492300930494640_n.jpg?stp=c0.0.960.960a_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=hOXpMsAtcO4Q7kNvgH8JXHL&_nc_oc=AdlZEp3WhJP-oemDPyvu0XkULgDlOwzmnO8ymf0aqoLVzTp4EiS6Q2uGS0bnm4OI4Wo&_nc_zt=24&_nc_ht=scontent.fcpq1-1.fna&_nc_gid=-aPx90_PAVlI8EvgVFVBMA&oh=00_AYFdMSCah4kWxQ0RnObKZlst32PvY8yOYyUkpdOXFG5jnw&oe=6813655E"
					/>
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