import './App.scss';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SideMenu from './Components/SideMenu/SideMenu';

function App() {
    return (
        <div className='App'>
            <Header />
            {/* is for spacing of components for a unified space */}
            <div className='sideMenuAndContent'>
                <SideMenu></SideMenu>
                <Content></Content>
            </div>
            <Footer />
        </div>
    );
}

export default App;
