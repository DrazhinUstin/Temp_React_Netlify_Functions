import { useParams, Link } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import Loading from '../components/Loading';
import ErrorPage from './ErrorPage';

const SingleProductPage = () => {
    const { id } = useParams();
    const { isLoading, isError, data: product } = useAxios(`/api/airtable?id=${id}`);

    if (isLoading) return <Loading />;

    if (isError) return <ErrorPage />;

    const {
        fields: {
            title,
            price,
            description,
            images: [image],
        },
    } = product;
    return (
        <section className='section section-center'>
            <Link to='/' className='link'>
                Back Home
            </Link>
            <div>
                <div className='title'>
                    <h2>{title}</h2>
                    <div className='title-underline'></div>
                </div>
                <article className='single-product'>
                    <img className='single-product-img' src={image.fields.file.url} alt={title} />
                    <div>
                        <h5>{title}</h5>
                        <h5 className='price'>${(price / 100).toFixed(2)}</h5>
                        <p>{description}</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default SingleProductPage;
