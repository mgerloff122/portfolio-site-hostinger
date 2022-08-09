import React from 'react'
import './portfolio.css'
import IMG1 from'../../assets/Portfolio1.png'
import IMG2 from'../../assets/portfolio2.png'
import IMG3 from'../../assets/portfolio3.png'
import IMG4 from'../../assets/portfolio4.png'
import IMG5 from'../../assets/portfolio5.png'
import IMG6 from'../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project Fitness React 18 Rapid API',
    github: 'https://github.com',
    demo: 'https://safe-citadel-24038.herokuapp.com/'
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
  {
    id: 4,
    image: IMG4,
    title: 'Movieland Dynamic Search',
    github: 'https://github.com/mgerloff122/movieland',
    demo: 'https://quiet-river-83637.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Dashboard Powered by SyncFusion',
    github: 'https://github.com/mgerloff122/dashboard-syncfusion',
    demo: 'https://dashboard-syncfusion-nu.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Tik Tik | Real People, Real Videos.',
    github: 'https://github.com/mgerloff122/tiktik_clone',
    demo: 'https://tiktik-clone-final-psi.vercel.app/'
  }
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