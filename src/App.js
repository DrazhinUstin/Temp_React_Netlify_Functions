import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsPage, SingleProductPage, ErrorPage } from './pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ProductsPage />} />
                <Route path=':id' element={<SingleProductPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
