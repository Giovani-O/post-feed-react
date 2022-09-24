import styles from "./Avatar.module.css";

/*
  It's possible to unravel the props object by using an object and its properties;
  This allows me to set default values to the properties
*/
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
