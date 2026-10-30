import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="coming-soon container">
      <i className="bi bi-person-circle"></i>
      <span className="section-label">MEDIHUB ACCOUNT</span>
      <h1>Login Page</h1>
      <h2>Coming Soon!</h2>
      <p>We are working on the login feature. Stay tuned!</p>

      <Link to="/" className="shop-btn">
        <i className="bi bi-house-door"></i>
        Back to Home
      </Link>
    </section>
  );
}

export default Login;