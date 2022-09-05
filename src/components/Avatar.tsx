import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({
    hasBorder = false,
    ...props
}:AvatarProps){
    return(
        <img {...props} className={hasBorder ? styles.imageWithBorder : styles.image} />
    )
}