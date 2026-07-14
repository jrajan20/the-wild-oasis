import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateBookingForm from "./CreateBookingForm";

function AddBooking() {
  return (
    <Modal>
      <Modal.Open opens="create-booking">
        <Button>Add new booking</Button>
      </Modal.Open>
      <Modal.Window name="create-booking">
        <CreateBookingForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddBooking;
