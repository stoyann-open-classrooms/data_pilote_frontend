import Dialog from '../../shared/modal/Dialog'
import './hero.css'

function Hero({title , text}) {
  return (
    <div className='hero'>
       <h1>{title}</h1>
       <h2>{text}</h2>
    </div>
  )
}

export default Hero