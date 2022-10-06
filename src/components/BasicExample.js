import { useState, useEffect } from 'react';
import axios from 'axios';

const BasicExample = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await axios.get(
                    'https://temporary-netlify-functions.netlify.app/api/2-basic-api'
                );
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    return (
        <section className='section section-center'>
            <div className='title'>
                <h2>basic setup</h2>
                <div className='title-underline'></div>
            </div>
            <div className='products'>
                {products.map(({ id, name, price, image: { url } }) => {
                    return (
                        <article key={id} className='product'>
                            <img src={url} alt={name} />
                            <div className='info'>
                                <h5>{name}</h5>
                                <h5 className='price'>${price}</h5>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default BasicExample;
