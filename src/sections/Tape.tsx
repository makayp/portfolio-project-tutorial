import StarIcon from '@/public/icons/star.svg';

const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search',
];

export default function TapeSection() {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
        <div className='flex gap-4 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          {words.map((word) => (
            <div key={word} className='flex flex-none gap-4 items-center'>
              <span className='text-gray-900 uppercase font-extrabold text-sm'>
                {word}
              </span>
              <StarIcon className='size-6 text-gray-900 -rotate-12' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
