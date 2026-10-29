
function Loader({ message = "Preparing your MediHub experience..." }) {
  return (
    <div className="loader-container" role="status" aria-live="polite">
      <span className="loader-spinner"></span>
      <p>{message}</p>
    </div>
  );
}

export default Loader;
