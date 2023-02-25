import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Search from "./components/Search";

function App() {
  return (
    <div  className="wrapper clear">
      <Cart />
      <Header />
      <div className='content p-40'>
        <div className='d-flex justify-between align-center mb-30'>
          <h1>All sneakers</h1>
          <Search />
        </div>
        <div className='d-flex'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
