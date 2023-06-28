import styles from './App.module.css';
import { Header } from "./components/Header.tsx";
import { Post, PostType } from './components/Post.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import './global.css';



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasnodarii.png',
      name: 'Lucas Nodari',
      role: 'CEO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat'},
      {type: 'link', content: 'jane.design/doctorcare'},           
    ],
    publishedAt: new Date('2023-06-25 19:42:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'O loco bicho'},
      {type: 'paragraph', content: 'Finalizei um projeto social network da RocketSeat'},
      {type: 'link', content: 'lucasnodari.tech'},           
    ],
    publishedAt: new Date('2023-06-27 19:42:00')
  }
]

export function App() { 
  return (
      <div>
        <Header/>
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })}
          </main>
        </div>  
      </div>
  )
}

