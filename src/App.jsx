import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css';

export function App() {
  return (
    <div>
      <Header/>
      <Post 
        author="Tony Corleone" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet nemo reprehenderit? Porro quibusdam architecto amet distinctio laborum consectetur quia deleniti iste similique dicta aspernatur neque, voluptatem velit natus reprehenderit." 
      />
      <Post
        author="Ipa Corlone"
        content="Birimbimbimbimbimbimbim"
      />
    </div>
  )
}

