function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Loading MediHub...</p>
    </div>
  );
}

export default Loader;