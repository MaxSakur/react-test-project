// DEFAULT
import Modal from "react-bootstrap/es/Modal";
import React from "react";



const ModalDefault = ({item,}) => {
    const {elementHeader, image, ...rest} = item

    console.log('image', image)
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>{elementHeader}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                { image ? <img src={image}/>: <p>NO IMG</p>}
                {Object.entries(rest).map((item, index)=>{
                    console.log('item', item)
                    return (

                        <p key={index} className="modal--body_field">{item[0]}
                            <span className="modal--body_value">{item[1]}</span>
                        </p>
                    )
                })}


            </Modal.Body>

        </Modal.Dialog>
    )
}

export default ModalDefault