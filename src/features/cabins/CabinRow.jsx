import styled from "styled-components";
import { HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import ButtonIcon from "../../ui/ButtonIcon";
import EditCabin from "./EditCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { deleteCabin: handleDelete, isDeleting } = useDeleteCabin();
  const { createCabin: duplicateCabin, isCreating } = useCreateCabin();

  const { id: cabinId, name, maxCapacity, regularPrice, discount, image } = cabin;

  function handleDuplicate() {
    duplicateCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
    });
  }

  return (
    <TableRow>
        <Img src={image} alt={name} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <div>
          <ButtonIcon onClick={handleDuplicate} disabled={isCreating} title="Duplicate">
            <HiSquare2Stack />
          </ButtonIcon>
          <EditCabin cabin={cabin} />
          <Modal>
            <Modal.Open opens="delete">
              <ButtonIcon title="Delete">
                <HiTrash />
              </ButtonIcon>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabin"
                onConfirm={() => handleDelete(cabinId)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Modal>
        </div>
      </TableRow>
  );
}

export default CabinRow;
