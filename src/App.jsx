import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'
import image4 from './assets/4.jpg'
import image5 from './assets/5.jpg'
import image6 from './assets/6.jpg'
import image7 from './assets/7.jpg'

import {BsChevronCompactRight,BsChevronCompactLeft} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


function App() {
  const slider = [image1,image2,image3,image4,image5,image6,image7]
  const [currentIndex, setCurrentIndex] =useState(0)

  const prevSlider =() => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? slider.length -1 : currentIndex -1;
    setCurrentIndex(newIndex)
  }
  const nextSlider =() => {
    const isLastSlider = currentIndex === slider.length -1;
    const newIndex = isLastSlider ? 0: currentIndex +1;
    setCurrentIndex(newIndex)
  }
  const goToslide = (slideIndex) =>{
    setCurrentIndex(slideIndex);
  }
  return (
    <div className='maw-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group'>
      <div style={{backgroundImage:`url(${slider[currentIndex]})`}} className="w-full bg-cover h-full rounded-2xl bg-center duration-500"></div>
      <div onClick={prevSlider} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} />
      </div>
      <div onClick={nextSlider} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {
          slider.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={()=>goToslide(slideIndex )} className="text-2xl cursor-pointer">
              <RxDotFilled />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
