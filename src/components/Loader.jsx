export default function Loader({
  label = 'Loading MediHub...',
}) {
  return (
    <div
      className="loader-wrap"
      role="status"
      aria-live="polite"
    >
      <span
        className="spinner-border text-primary"
        aria-hidden="true"
      />
      <span>{label}</span>
    </div>
  )
}