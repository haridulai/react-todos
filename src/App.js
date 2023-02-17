import styles from "./App.module.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2 className={styles.error}>This is an error</h2>
      {/* Product name, description, price */}
      <Product
        name="Amazon Echo"
        description="Your AI assistant"
        price={59.99}
      />

      <Product
        name="Iphone 100x Plus"
        description="The best iPhone"
        price={999}
      />

      <Product
        name="Macbook Pro"
        description="Your favourite computer"
        price={2259.99}
      />
    </div>
  );
}

export default App;
