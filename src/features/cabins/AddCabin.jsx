import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="create-cabin">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="create-cabin">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
