import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";


export default function Author() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input, setInput] = useState();
  const [autor, setAutor] = useState([]);

  fetch('/api/authors').then(response => console.log(response.json()));

  return (
    <>
      <div>
        <form type="text" onChange={setAutor}>
          <h2> NOME DO AUTOR </h2>
          <div>
            <input />
            <Button>
              <FaEdit />
            </Button>
            <button type="button" class="btn btn-danger">
              <FaTrashAlt />
            </button>
          </div>
        </form>
       </div >

      <Button class="float-right" variant="primary" className="text-end mt-2" onClick={handleShow}>
        CADASTRAR
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nome do Autor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );


}