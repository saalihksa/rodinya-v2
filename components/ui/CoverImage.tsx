type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
};

/** Statik `/public` görselleri. `fill` kaplayan kutu için. */
export function CoverImage({
  src,
  alt,
  className = "",
  priority = false,
  fill = false,
}: CoverImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={fill ? `cover-img ${className}` : className}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
