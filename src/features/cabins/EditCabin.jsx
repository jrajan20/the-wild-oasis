import { HiPencil } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ButtonIcon from "../../ui/ButtonIcon";
import EditCabinForm from "./EditCabinForm";

function EditCabin({ cabin }) {
  return (
    <Modal>
      <Modal.Open opens="edit-cabin">
        <ButtonIcon title="Edit">
          <HiPencil />
        </ButtonIcon>
      </Modal.Open>
      <Modal.Window name="edit-cabin">
        <EditCabinForm cabin={cabin} />
      </Modal.Window>
    </Modal>
  );
}

export default EditCabin;
