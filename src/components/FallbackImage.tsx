import { useState } from 'react';

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function FallbackImage({ 
  src, 
  fallbackSrc = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
  alt = '',
  ...props 
}: FallbackImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? fallbackSrc : src}
      alt={alt}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
