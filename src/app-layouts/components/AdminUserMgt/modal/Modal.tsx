import { Modal } from "react-bootstrap"
export const Activate = () => {
  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  )
}

export const Deactivate = () => {
  return (
    <section>
      Deactivate
    </section>
  )
}