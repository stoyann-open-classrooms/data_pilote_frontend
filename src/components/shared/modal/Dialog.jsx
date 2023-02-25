import { useState } from 'react'
import "./dialog.css"
import {FaPlus, FaPlusCircle} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import Button from '../button/Button'


function Dialog({ btn, children, addIcone, editIcone }) {
  const [modal, setModal] = useState(true)





  const toogleModal = (e) => {
    setModal(!modal)
  }



  return (
    <>
    {/* <Button onClick={() => toogleModal()}>{btn}</Button> */}
    
      <button className='btn btn-primary'  onClick={toogleModal}>
      <FaPlusCircle/> {btn}
      </button>
      {!modal ? (
        <div onClick={toogleModal} className="overlay">
          <div className="modal">
            <button
              onKeyUp={toogleModal}
              onClick={toogleModal}
              className='btn-close'
            >
            <AiOutlineClose/>
            </button>
            <div className="dialog_form">{children}</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Dialog