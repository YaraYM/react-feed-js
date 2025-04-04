import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Tony Corleone"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet nemo reprehenderit? Porro quibusdam architecto amet distinctio laborum consectetur quia deleniti iste similique dicta aspernatur neque, voluptatem velit natus reprehenderit."
          />
          <Post
            author="Ipa Corlone"
            content="Birimbimbimbimbimbimbim"
          />
        </main>
      </div>
    </div>
  )
}

