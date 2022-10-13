import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='section section-center'>
            <Link to='/' className='link'>
                Back Home
            </Link>
            <div className='title'>
                <h2>page not found</h2>
                <div className='title-underline'></div>
            </div>
        </section>
    );
};

export default ErrorPage;
