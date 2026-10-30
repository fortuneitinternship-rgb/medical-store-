import { Link, useLocation } from "react-router-dom";

function ComingSoon() {
  const location = useLocation();
  const pageName =
    location.pathname.replace("/", "").replaceAll("-", " ") || "Page";

  const title = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <section className="coming-soon container">
      <i className="bi bi-tools"></i>
      <span className="section-label">MEDIHUB</span>
      <h1>{title}</h1>
      <h2>Coming Soon!</h2>
      <p>We are working on this page. Stay tuned!</p>

      <Link to="/" className="shop-btn">
        <i className="bi bi-house-door"></i>
        Back to Home
      </Link>
    </section>
  );
}

export default ComingSoon;