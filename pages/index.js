import styles from '../styles/Home.module.css'
import Header from '../components/header';
import ProductList from '../components/productList';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <ProductList />
    </div>
  )
}

export default Home;
