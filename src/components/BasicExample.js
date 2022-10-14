import useAxios from '../hooks/useAxios';
import Loading from './Loading';

const BasicExample = () => {
    const { isLoading, data: products } = useAxios(
        'https://temporary-netlify-functions.netlify.app/api/2-basic-api'
    );

    if (isLoading) return <Loading />;

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
