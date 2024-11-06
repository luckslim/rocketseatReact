import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post';
import styles from './App.module.css';
import './styles.css';

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQF3xLGMKCY8Rg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730505060009?e=1736380800&v=beta&t=KBoc7rzInKflsQpJ5Xi2tazqX0npyr1EhwmB_5R4FCI',
      name: 'lucas Soares',
      role: 'lucasSL@rocketSeat'
    },
    content: [
      {type:'paragraph', content:'fala galera'},
      {type:'paragraph', content:'Lucas is a passionate software developer with a knack for problem-solving and a love for clean code. He specializes in full-stack development, working with both frontend and backend technologies. His skills include JavaScript, React, and Node.js, along with experience in PHP frameworks like Laravel. Lucas thrives in dynamic environments, always eager to learn and implement new technologies. He values collaboration, enjoys brainstorming with team members, and is committed to delivering efficient, high-quality solutions that meet users’ needs.'},
      {type:'link', content:'lucasdev/developer'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Mark_Ruffalo_%2836243137665%29_%28cropped%29.jpg/1200px-Mark_Ruffalo_%2836243137665%29_%28cropped%29.jpg',
      name: 'Mark rufallo',
      role: 'Mark@rocketSeat'
    },
    content: [
      {type:'paragraph', content:'fala galera'},
      {type:'paragraph', content:'Mark Ruffalo is a skilled software developer known for his dedication and versatility in coding. With expertise spanning front-end and back-end technologies, he’s proficient in languages like Python, JavaScript, and frameworks such as React and Django. Mark has a strong commitment to clean, maintainable code and a collaborative work style that enhances team dynamics. He constantly seeks new challenges, whether in AI, data science, or web development, and strives to stay updated on emerging tech trends. Mark’s goal is to create impactful solutions that improve user experiences and drive innovation.'},
      {type:'link', content:'MarkDev/developer'}
    ],
    publishedAt: new Date('2024-11-03 20:00:00'),
  },
];
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post=>{
            return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}
