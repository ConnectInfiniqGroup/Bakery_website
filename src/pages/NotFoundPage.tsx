import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-serif font-bold text-dark mb-4">404</h1>
      <h2 className="text-3xl font-serif font-bold text-dark mb-8">Oops! Page Not Found</h2>
      <p className="text-dark/70 mb-8 max-w-md mx-auto">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-all">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
