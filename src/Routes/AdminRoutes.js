import React from 'react';
import Layout from '../admin/component/Layout';
import { Route, Routes } from 'react-router-dom';
import HomeAdmin from '../admin/Containers/HomeAdmin';
import ShopAdmin from '../admin/Containers/ShopAdmin';
import BlogAdmin from '../admin/Containers/BlogAdmin';

function AdminRoutes(props) {
    return (
        <Layout>
        <Routes>
            <Route exact path='/home' element={<HomeAdmin />} />
            <Route exact path='/shop' element={<ShopAdmin />} />
            <Route exact path='/blog' element={<BlogAdmin />} />
        </Routes>
        </Layout>
    );
}

export default AdminRoutes;