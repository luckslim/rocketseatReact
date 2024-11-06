import { Header } from './components/Header'
import {Sidebar} from './components/Sidebar'
import { Post } from './components/Post';
import styles from './App.module.css';
import './styles.css';
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          < Post
            author="lucas soares"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae provident aspernatur ad eveniet, labore quibusdam molestias facere adipisci fuga cupiditate nisi impedit, corporis facilis! Velit numquam reiciendis deserunt alias?"
          />
          <Post author="gabriel"
            content="um post novo e legal"
          />
        </main>
      </div>
    </div>
  )
}
