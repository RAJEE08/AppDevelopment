import React from 'react';
import Header from './header';
import './home.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import DonorList from './components/UserList';
import Footer from './footer';

function Home(){

    return (
        <div className='home'>
            <Header />
            <h1 id='t2'>Organ Donation Management</h1>
            <div className='dashboard'>
                <Provider store={store}>
                    <div>
                        <DonorList />
                    </div>
                </Provider>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Home;