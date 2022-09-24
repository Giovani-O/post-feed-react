import styles from './Header.module.css' // Importing a scoped css file, it is necessary to set a name
import igniteLogo from '../assets/ignite-logo.svg'; // Images should also have a name

export function Header() {
  return (
    // To apply classes I have to use className
    // To use a class from a scoped css file, I have to write it as an object
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite" />
      <h1>Ignite Feed</h1>
    </header>
  );
}