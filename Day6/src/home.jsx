import React from 'react';
import Header from './header';
import './home.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import DonorList from './components/UserList';
import Footer from './footer';
import GridView from './components/GridView';

function Home(){

    return (
        <div className='home'>
            <Header />
            <h1 id='t2'>Admin View</h1>
            <div className='right'>
            <GridView />
            </div>
            <div className='left'>
            <div className='dashboard'>
                <Provider store={store}>
                    <div>
                        <DonorList />
                    </div>
                </Provider>
            </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Home;