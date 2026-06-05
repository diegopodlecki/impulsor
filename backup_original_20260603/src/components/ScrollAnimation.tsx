import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export function ScrollFade({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
}: ScrollFadeProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500 ease-out',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8',
        className,
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}

interface ScrollStaggerProps {
  children: React.ReactElement[];
  className?: string;
  itemDelay?: number;
  threshold?: number;
  rootMargin?: string;
}

export function ScrollStagger({
  children,
  className = '',
  itemDelay = 100,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
}: ScrollStaggerProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, rootMargin });

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className={cn(
            'transition-all duration-500 ease-out',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8',
          )}
          style={{
            transitionDelay: isVisible ? `${i * itemDelay}ms` : '0ms',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
