import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Button } from "react-bootstrap";

export default function Categorias() {
  return (
    <div>
      <div class="table-responsive">
        <table class="table table-striped table-lg">
          <thead>
            <tr>
              <th scope="col">CATEGORIA</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                A
              </td>
              <td>
                <Button>
                <FaEdit/>
                </Button>
                <button 
                type="button" 
                class="btn btn-danger">
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>

            <tr>
              <td>
                B
              </td>
              <td>
              <Button>
                <FaEdit/>
                </Button>
                <button 
                type="button" 
                class="btn btn-danger">
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>

            <tr>
              <td>
                C
              </td>
              <td>
              <Button>
                <FaEdit/>
                </Button>
                <button 
                type="button" 
                class="btn btn-danger">
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>

            <tr>
              <td>
                D
              </td>
              <td>
              <Button>
                <FaEdit/>
                </Button>
                <button 
                type="button" 
                class="btn btn-danger">
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>


            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}