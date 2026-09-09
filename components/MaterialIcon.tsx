export default function MaterialIcon({
  name,
  className = "",
  label,
}: {
  name: string;
  className?: string;
  label?: string;
}) {
  if (label) {
    return (
      <span role="img" aria-label={label} className={`material-symbols-outlined ${className}`}>
        {name}
      </span>
    );
  }

  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}
