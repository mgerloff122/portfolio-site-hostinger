import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import AVTR5 from '../../assets/avatar5.png'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: `[Product name] had a great [product advantage]. I was a bit worried about [objection], but it wasn’t a problem at all. I love using [product name] when I’m [best use scenario].`
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: `[Business name] was [positive attribute]. The team helped me [problem the business solved]. I had a problem with [key challenge], but they took care of it right away.`
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: `When we discovered [your company name], they were immediately [company strength]. We saw significant improvements right away and, after [time as a customer], we have seen [measurable benefit].`
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: `I just started using [product or service] and it has been [key benefit]. I feel [emotional response]. I would definitely say [recommendation or response to product/service]`
  },
  {
    avatar: AVTR5,
    name: 'Green Tie Guy',
    review: `I visited [business name] and tried [product or service the customer used]. The experience was great, it [advantage enjoyed by the customer]. I’d highly recommend them to anyone.`
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className='client__avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                    {review}
                </small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials