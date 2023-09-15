import MainPage from 'pages/MainPage';
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SellerLayout from './SellerLayout';

const RouteLayout = () => {
    return (

        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/main-page' element={<MainPage />} />
                <Route path="/seller/*" element={<SellerLayout />} />
                <Route
                    path='*'
                    element={<Navigate
                        to='/main-page'
                        replace
                    />}
                />
            </Routes>
        </Suspense>
    )
}
export default RouteLayout;