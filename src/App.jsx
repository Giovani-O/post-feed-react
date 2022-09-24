// JSX = Javascript + XML
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'


export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Gio Oliveira"
            content="Lorem ipsum dolor sit amet..."
          />
          <Post 
            author="Giovani O."
            content="Lorem ipsum dolor sit amet..."
          />
        </main>
      </div>
    </div>
  )
}
