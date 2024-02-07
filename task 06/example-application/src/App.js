import Home from './components/Home';

function App () {
  return(
    <div>
      <Home />
      <Home />
      {
        [1,2,3].map((item) => <h1>hi {item}</h1>)
      }
    </div>
   
  );
}

export default App;