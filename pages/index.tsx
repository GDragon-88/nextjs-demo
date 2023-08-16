import { Inter } from '@next/font/google'
import React from 'react'
import SliderComponent from '../Components/Home/SliderComponent';
import { content } from '../constant/banner'
import { Carousel, Divider } from 'antd';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Divider/>
      <Link href={'/stream/video'}>Go to streaming</Link>
      <div style={{height: '500px'}}></div>

      <Carousel autoplay={true}
        autoplaySpeed={5000}
        style={{display: 'none'}}
      >
        {content && content.map((item, index) => {
          return (
            <SliderComponent data={item} key={index} />
          )
        })
        }
      </Carousel>
    </>
  )
}
