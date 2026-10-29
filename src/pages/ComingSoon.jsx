
import { Link, useLocation } from "react-router-dom";

function ComingSoon() {
  const location = useLocation();

  const pageName = location.pathname
    .split("/")
    .filter(Boolean)
    .pop();

  const title = pageName
    ? pageName.replace(/-/g, " ").replace(/\b\w/g, (letter) =>
        letter.toUpperCase()
      )
    : "Page";

  return (
    <section className="coming-soon-page">
      <div className="coming-soon-glow"></div>

      <div className="coming-soon-content">
        <span className="coming-soon-icon">
          <i className="bi bi-hourglass-split"></i>
        </span>

        <span className="eyebrow">MEDIHUB / UNDER DEVELOPMENT</span>

        <h1>{title}</h1>
        <h2>Something good is coming.</h2>

        <p>
          We're carefully building this part of MediHub to make your
          everyday healthcare experience simpler. Please check back soon.
        </p>

        <div className="coming-progress">
          <div className="coming-progress-label">
            <span>Building your experience</span>
            <i className="bi bi-stars"></i>
          </div>
          <div className="progress-track">
            <span></span>
          </div>
        </div>

        <Link to="/" className="button-primary">
          <i className="bi bi-arrow-left"></i> Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ComingSoon;
