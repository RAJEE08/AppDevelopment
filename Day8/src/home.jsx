import React from 'react';
import Header from './header';
import './home.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddDonor from './components/AddDonor';
import DonorList from './components/DonorList';

function Home(){

    return (
        <div>
            <p id='quote'>OrganEase: Unlocking Hope, Saving Lives</p>
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
        </div>
    );
}

export default Home;