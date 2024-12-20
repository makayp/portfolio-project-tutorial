import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Orbit({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  orbitDuration,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  orbitDuration?: string;
  spinDuration?: string;
}>) {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div
        className={twMerge(
          shouldOrbit && 'animate-spin [animation-duration:10s]'
        )}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className='flex items-start justify-start'
          style={{
            transform: `rotate(${rotation}deg)`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin && 'animate-spin')}
            style={{ animationDuration: spinDuration }}
          >
            <div
              className='inline-flex'
              style={{
                transform: `rotate(${-rotation}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
