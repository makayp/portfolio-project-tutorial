import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import Hobbies from '@/components/Hobbies';
import SectionHeader from '@/components/SectionHeader';
import ToolboxItems from '@/components/ToolboxItems';
import ChromeIcon from '@/public/icons/chrome.svg';
import CSSIcon from '@/public/icons/css3.svg';
import GithubIcon from '@/public/icons/github.svg';
import HTMLIcon from '@/public/icons/html5.svg';
import ReactIcon from '@/public/icons/react.svg';
import JavascriptIcon from '@/public/icons/square-js.svg';
import bookImage from '@/public/images/book-cover.png';
import mapImage from '@/public/images/map.png';
import smileMemoji from '@/public/images/memoji-smile.png';
import Image from 'next/image';

const toolboxItems = [
  { title: 'Javascript', icon: JavascriptIcon },
  { title: 'HTML5', icon: HTMLIcon },
  { title: 'CSS3', icon: CSSIcon },
  { title: 'React', icon: ReactIcon },
  { title: 'Chrome', icon: ChromeIcon },
  { title: 'Github', icon: GithubIcon },
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

              <ToolboxItems
                items={toolboxItems}
                className=''
                itemsWrapperClassName='animate-move-left [animation-duration:30s]'
              />
              <ToolboxItems
                items={toolboxItems}
                className='mt-6'
                itemsWrapperClassName='animate-move-right [animation-duration:15s]'
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

              <Hobbies />
            </Card>
            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
              <Image
                src={mapImage}
                alt='map'
                className='h-full w-full object-cover object-left-top'
              />

              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full   inset-0 outline outline-2 -outline-offset-2 outline-gray-50/30'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
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
