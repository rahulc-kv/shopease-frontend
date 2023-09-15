import { DownArrow, Globe } from 'assets/icons';
import React from 'react';

const TopBar = () => {
    return (
        <div className='h-[60px] bg-white shadow-lg fixed top-0 w-[calc(100%-15rem)] z-[999]'>
            <div className='flex flex-row h-full px-8 justify-between items-center'>

                <div>
                    
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <Globe />
                    <div className='mx-2 text-primary cursor-pointer'>
                        English
                    </div>
                    <DownArrow />
                </div>
            </div>
        </div>
    )
};

export default TopBar;