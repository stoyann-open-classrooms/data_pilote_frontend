import './card.css'

function Card({children , horodated}) {
  return ( 
    <div className={`link-content ${horodated && 'horodated'}`}>
        {children}
    </div>
  )
}

export default Card