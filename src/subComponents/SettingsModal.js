import React,{useRef} from 'react'
import { Modal,Row,Col,Form } from 'react-bootstrap';
const SettingsModal = (props) => {
    const slippage_ref=useRef();
    return (
        <>
        <Modal
        show={props.showSettingModal}
        onHide={() => props.setShowSettingsModal(false)}
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>Slippage</Col>
            <Col>{props.slippage} %</Col>
          </Row>
          <Form.Range ref={slippage_ref} value={props.slippage} onChange={()=>{props.setSlippage(slippage_ref.current.value)}}/>
          <small>{props.slippage<40?
                                    "Slippage is too low your Transaction may fail"
                                    :props.slippage<50?
                                                      " "
                                                      :props.slippage>60?
                                                      "Slippage is too high your Transaction may front run":null
          }</small>
        </Modal.Body>
      </Modal>
        </>
    );
}

export default SettingsModal;