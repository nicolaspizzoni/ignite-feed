import styles from './Avatar.module.css';

export function Avatar({
    source,
    alt,
    hasBorder = false,
}){
    return(
        <img src={source} alt={alt} className={hasBorder ? styles.imageWithBorder : styles.image} />
    )
}