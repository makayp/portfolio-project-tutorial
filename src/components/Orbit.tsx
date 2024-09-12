import { PropsWithChildren } from 'react';

export default function Orbit({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div
        className=''
        style={{
          transform: `rotate(${rotation}deg)`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div
          className='inline-flex'
          style={{ transform: `rotate(${-rotation}deg)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
