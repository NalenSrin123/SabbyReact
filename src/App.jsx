import './App.css'
function App(){
  return(
    <>
      <header>
        <div className="header">
          <img src="https://news.sabay.com.kh/img/logo.png" alt="" />
        </div>
      </header>
      <nav>
        <div className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">កម្សាន្ត</a></li>
            <li><a href="#">បច្ចេកវិទ្យា</a></li>
            <li><a href="#">កីឡា</a></li>
            <li><a href="#">Auto Talk</a></li>
          </ul>
        </div>
      </nav>
      <section>
          <h1>Main Content</h1>
      </section>
      <footer>
          <img src="https://news.sabay.com.kh/img/logo.png" alt="" />
          <h1>Sabby News</h1>
      </footer>
    </>
  );
}
export default App;