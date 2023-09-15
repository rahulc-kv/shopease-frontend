import { Person } from 'assets/icons';
import { Header } from 'components';
import React from 'react';

const MainPage = () => {
  return (
    <div className='100%'>
      <Header />
      <div className='mt-[60px] h-[calc(100vh-60px)]'>
        <div className='flex justify-end h-[500px] items-end bgGrad border border-gray-200'>
          <Person />
        </div>
      </div>
    </div>
  );
};

export default MainPage;