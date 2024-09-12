import Image from 'next/image';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import StarIcon from '@/public/icons/star.svg';
import bookImage from '@/public/images/book-cover.png';
import JavascriptIcon from '@/public/icons/square-js.svg';
import HTMLIcon from '@/public/icons/html5.svg';
import CSSIcon from '@/public/icons/css3.svg';
import ReactIcon from '@/public/icons/react.svg';
import ChromeIcon from '@/public/icons/chrome.svg';
import GithubIcon from '@/public/icons/github.svg';
import TechIcon from '@/components/TechIcon';
import mapImage from '@/public/images/map.png';
import smileMemoji from '@/public/images/memoji-smile.png';
import CardHeader from '@/components/CardHeader';
import ToolboxItems from '@/components/ToolboxItems';

const toolboxItems = [
  { title: 'Javascript', icon: JavascriptIcon },
  { title: 'HTML5', icon: HTMLIcon },
  { title: 'CSS3', icon: CSSIcon },
  { title: 'React', icon: ReactIcon },
  { title: 'Chrome', icon: ChromeIcon },
  { title: 'Github', icon: GithubIcon },
];

const hobbies = [
  { title: 'Painting', emoji: '🎨', left: '5%', top: '5%' },
  { title: 'Photography', emoji: '📷', left: '50%', top: '5%' },
  { title: 'Hiking', emoji: '🥾', left: '35%', top: '40%' },
  { title: 'Gaming', emoji: '🎮', left: '10%', top: '35%' },
  { title: 'Music', emoji: '🎵', left: '70%', top: '45%' },
  { title: 'Fitness', emoji: '🏋️‍♀️', left: '5%', top: '65%' },
  { title: 'Reading', emoji: '📚', left: '45%', top: '70%' },
];

export default function AboutSection() {
  return (
    <div className='py-20 lg:py-28'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me'
        />
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader
                title='My Reads'
                description='Explore the books shaping my perspectives.'
              />

              <div className='w-40 mx-auto mt-2 md:mt-0'>
                <Image src={bookImage} alt='Book cover' />
              </div>
            </Card>
            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='My Toolbox'
                description='Explore the technologies and tools I use to craft exceptional digital
                experiences.'
                className='px-6 pt-6'
              />

              <ToolboxItems items={toolboxItems} className='' />
              <ToolboxItems
                items={toolboxItems}
                className='mt-6'
                itemsWrapperClassName='-translate-x-1/2'
              />
            </Card>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Beyond the Code'
                description='Explore my interests and hobbies beyond the digital realm.'
                className='px-6 py-6'
              />

              <div className='relative flex-1'>
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className='font-medium text-gray-950'>
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
              <Image
                src={mapImage}
                alt='map'
                className='h-full w-full object-cover object-left-top'
              />

              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400  inset-0 outline outline-2 -outline-offset-2 outline-gray-50/30'>
                <Image
                  src={smileMemoji}
                  alt='smiling memoji'
                  className='size-20'
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
