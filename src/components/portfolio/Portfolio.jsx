import React from 'react'
import './portfolio.css'
import IMG1 from'../../assets/Portfolio1.png'
import IMG2 from'../../assets/portfolio2.png'
import IMG3 from'../../assets/portfolio3.png'
import IMG4 from'../../assets/portfolio4.png'
import IMG5 from'../../assets/portfolio5.png'
import IMG6 from'../../assets/portfolio6.png'
import IMG7 from'../../assets/portfolio7.png'
import IMG8 from'../../assets/portfolio8.png'
import IMG9 from'../../assets/portfolio9.png'
import IMG10 from'../../assets/portfolio10.png'
import IMG11 from'../../assets/portfolio11.png'
import IMG12 from'../../assets/portfolio12.png'
import IMG13 from'../../assets/portfolio13.png'



const data = [
  
  {
    id: 13,
    image: IMG13,
    title: 'HooBank: Modern Banking ReImagined.',
    github: 'https://github.com/mgerloff122/vawulens',
    demo: 'https://vawulens.vercel.app/'
  },
  {
    id: 12,
    image: IMG12,
    title: 'Join the Legends of the Fitness World: Vawulens',
    github: 'https://github.com/mgerloff122/vawulens',
    demo: 'https://vawulens.vercel.app/'
  },
  {
    id: 11,
    image: IMG11,
    title: 'Animated Testimonial Interface',
    github: 'https://github.com/mgerloff122/Testimonial-Animated-Transition-and-Page-Design',
    demo: 'https://testimonial-animated-transition-and-page-design.vercel.app/'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Waves of Music with WaveSurfer Audio Player',
    github: 'https://github.com/mgerloff122/wavesurfer-music-wave',
    demo: 'https://wavesurfer-music-wave.vercel.app/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'VueLamp: Latest in Lighting',
    github: 'https://github.com/mgerloff122/vue-lamp',
    demo: 'https://vue-lamp-three.vercel.app/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Glassmorphism Login or SignUp',
    github: 'https://github.com/mgerloff122/Login-Registration-Form',
    demo: 'https://login-registration-form.vercel.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Mend-ic: The Power To Heal',
    github: 'https://github.com/mgerloff122/tiktik_clone',
    demo: 'https://tiktik-clone-final-psi.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Tik Tik | Real People, Real Videos.',
    github: 'https://github.com/mgerloff122/tiktik_clone',
    demo: 'https://tiktik-clone-final-psi.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'SyncFusion Functional Dashboard',
    github: 'https://github.com/mgerloff122/dashboard-syncfusion',
    demo: 'https://dashboard-syncfusion-nu.vercel.app/'
  },
  {
    id: 1,
    image: IMG1,
    title: 'Project Fitness React 18 Rapid API',
    github: 'https://github.com',
    demo: 'https://safe-citadel-24038.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Movieland Dynamic Search',
    github: 'https://github.com/mgerloff122/movieland',
    demo: 'https://quiet-river-83637.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'The Future is Now with GPT-3 Open AI',
    github: 'https://github.com/mgerloff122/gpt3_mpg/tree/master',
    demo: 'https://sleepy-depths-41975.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Adventure Awaits with TRVL',
    github: 'https://github.com/mgerloff122/React-Website-Yt-1',
    demo: 'https://tranquil-atoll-65743.herokuapp.com/'
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
          </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio