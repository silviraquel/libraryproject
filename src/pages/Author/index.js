import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function Author() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input, setInput] = useState();
  const [autores, setAutores] = useState([]);
  const [totalElements, setTotalElements] = useState(0);

  //fetch('/api/authors').then(response => console.log(response.json()));

    useEffect(() => {
      fetch('/api/authors')
        .then(resposta =>resposta.json())
        .then (dados => {
          setAutores(dados.content)
          setTotalElements(dados.totalElements)
        })
    }, [])

 const adicionarAutores = (autor) => {
  const autores = [...this.state.autores, autor]
  setAutores(autoresAtuais => [...autoresAtuais, autor])
  }  

  return (
    <>
      <div>
     <Button class="float-right" variant="primary" className="text-end mt-2" onClick={handleShow}>
        CADASTRAR
    </Button>
      
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>LISTA DE AUTORES</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {autores.map((value,index) => {
    return <tr key={index}>
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>
      <Button onClick={adicionarAutores}>
      <FaEdit />
    </Button>
    <button type="button" className="btn btn-danger">
      <FaTrashAlt />
    </button>
      </td>
    </tr>
  })}
  </tbody>
</Table>
       
       </div >

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

      <p>{totalElements}</p>

    </>
  );


}