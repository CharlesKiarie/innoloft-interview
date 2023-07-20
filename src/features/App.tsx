import { Route, Routes } from "react-router-dom"
import Main from "pages/Main"
import Product from "pages/Product"
import EditProduct from "pages/EditProduct"
import NotFound from "pages/NotFound"
import DataProvider from "context/DataContext"



export default function App() {
    return (
        <DataProvider>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/product/edit" element={<EditProduct />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </DataProvider>
    )
}
