import React from 'react';
import Header from './header';
import './home.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddDonor from './components/AddUser';
import DonorList from './components/UserList';
import Footer from './footer';

function Home(){

    return (
        <div>
            <Header />
            <h1 id='t2'>Organ Donation Dashboard</h1>
            <div className='dashboard'>
                <Provider store={store}>
                    <div>
                        <AddDonor />
                        <DonorList />
                    </div>
                </Provider>
            </div>
            <Footer />
        </div>
    );
}

export default Home;