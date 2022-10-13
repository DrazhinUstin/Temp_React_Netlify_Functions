import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Airtable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await axios.get('/api/airtable');
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
                <h2>airtable</h2>
                <div className='title-underline'></div>
            </div>
            <div className='products'>
                {products.map((product) => {
                    const {
                        sys: { id },
                        fields: {
                            title,
                            price,
                            images: [
                                {
                                    fields: {
                                        file: { url },
                                    },
                                },
                            ],
                        },
                    } = product;
                    return (
                        <Link to={id} key={id} className='product'>
                            <img src={url} alt={title} />
                            <div className='info'>
                                <h5>{title}</h5>
                                <h5 className='price'>${(price / 100).toFixed(2)}</h5>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Airtable;
