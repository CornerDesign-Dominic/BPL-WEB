type ImagePlaceholderProps = {
  path: string;
  label: string;
  variant?: "wide" | "square";
};

export function ImagePlaceholder({
  path,
  label,
  variant = "wide",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder image-placeholder--${variant}`}
      data-image-path={path}
      role="img"
      aria-label={`${label}. Bild wird später manuell eingefügt.`}
    >
      <span className="image-placeholder__label">{label}</span>
      <span className="image-placeholder__path">{path}</span>
    </div>
  );
}
