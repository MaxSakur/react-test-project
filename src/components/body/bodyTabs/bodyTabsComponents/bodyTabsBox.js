// DEFAULT
import Modal from "react-bootstrap/es/Modal";
import React from "react";



const ModalDefault = ({item,}) => {
    const {elementHeader, image, ...rest} = item

    return (
        <Modal.Dialog>
            {elementHeader ?
                <Modal.Header closeButton>
                    <Modal.Title>{elementHeader}</Modal.Title>
                </Modal.Header>
                :
            null
            }


            <Modal.Body>
                <div className= { image ? "modal--withImage" : null }>

                    { image ? <img className="modal--withImage-image" src={image} alt="test-img"/>: null }

                    <ul className="modal--textSection">

                        {Object.entries(rest).map((item, index)=>{
                            return (
                                <li key={index} >
                                    <p className="modal--body_field">{item[0]}</p>
                                    <span className="modal--body_value">{item[1]}</span>
                                </li>
                            )
                        })}
                    </ul>

                </div>



            </Modal.Body>

        </Modal.Dialog>
    )
}

export default ModalDefault