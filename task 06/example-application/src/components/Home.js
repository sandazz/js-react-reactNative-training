import logo from '../logo.svg';
import '../App.css';

function Home () {
    return (
        <div className='App'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1>Welcome to the react world</h1>
        </div>
    );
}

export default Home;