import './global.css'

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Post from "./components/Post";
import styles from './App.module.css';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Conteudo {
  type: 'paragraph' | 'link';
  content: string;
}

interface Posts {
  id: number;
  author: Author;
  conteudo: Conteudo[];
  publishedAt: Date;
}

const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/nicolaspizzoni.png',
      name: 'Nicolas Pizzoni',
      role: 'Desenvolvedor ITS&S NTT DATA - ReactJS' 
    },
    conteudo: [
      {type: 'paragraph', content: 'Fala pessoal 😁'},
      {type: 'link', content: '@nicolaspizzoni'}
    ],
    publishedAt: new Date('2022-09-04 20:22:21')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat' 
    },
    conteudo: [
      {type: 'paragraph', content: 'Fala Rocketseat 😁'},
      {type: 'link', content: '@maykbrito'}
    ],
    publishedAt: new Date('2022-09-03 20:26:01')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CEO @Rocketseat' 
    },
    conteudo: [
      {type: 'paragraph', content: 'Fala Mayk, fala Nicolas 🚀'},
      {type: 'link', content: '@diego3g'}
    ],
    publishedAt: new Date('2022-09-01 20:45:21')
  },
]

function App() {

  return (
    <div>
      <Header />
      <div
        className={styles.wrapper}
      >
        <Sidebar />
        <main>
          {
            posts.map(item => {
              return(
                <Post
                  key={item.id}
                  author={item.author}
                  conteudo={item.conteudo}
                  publishedAt={item.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App


