import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <a href="/" className="error-button">Go Back Home</a>
    </div>
  );
};

export default ErrorPage;