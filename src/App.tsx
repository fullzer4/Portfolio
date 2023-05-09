import type { Component } from 'solid-js';
import Home from './pages/home';
import styles from "./scss/page.module.scss"
import About from './pages/about';

const App: Component = () => {
  return (
    <div class={styles.page}>
      <Home/>
      <About/>
    </div>
  );
};

export default App;
