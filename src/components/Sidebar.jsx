import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside
            className={styles.sidebar}
        >
            <img 
                src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
                alt="Foto de fundo do usuário"
                className={styles.cover}
            />
            <div
                className={styles.profile}
            >
                <Avatar
                    source="https://github.com/nicolaspizzoni.png"
                    alt="Foto de perfil do usuário"
                    hasBorder
                />
                <strong>Nicolas Pizzoni</strong>
                <span>Web and Mobile Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine
                        size={20}
                    />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}