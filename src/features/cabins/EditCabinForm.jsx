import { useForm } from "react-hook-form";
import { useEditCabin } from "./useEditCabin";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

function EditCabinForm({ cabin, onCloseForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      name: cabin.name,
      maxCapacity: cabin.maxCapacity,
      regularPrice: cabin.regularPrice,
      discount: cabin.discount,
      description: cabin.description,
    },
  });

  const { editCabin, isEditing } = useEditCabin();

  function onSubmit(data) {
    const image = data.image?.length ? data.image[0] : cabin.image;
    editCabin({ id: cabin.id, data: { ...data, image } }, { onSuccess: onCloseForm });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" htmlFor="name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
      </FormRow>

      <FormRow
        label="Maximum capacity"
        htmlFor="maxCapacity"
        error={errors?.maxCapacity?.message}
      >
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "Maximum capacity is required",
            min: { value: 1, message: "Maximum capacity must be at least 1" },
          })}
        />
      </FormRow>

      <FormRow
        label="Regular price"
        htmlFor="regularPrice"
        error={errors?.regularPrice?.message}
      >
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "Regular price is required",
            min: { value: 0, message: "Regular price must be at least 0" },
          })}
        />
      </FormRow>

      <FormRow
        label="Discount"
        htmlFor="discount"
        error={errors?.discount?.message}
      >
        <Input
          type="number"
          id="discount"
          {...register("discount", {
            required: "Discount is required",
            validate: (value) =>
              (value >= 0 && value <= getValues().regularPrice) ||
              "Discount must be between 0 and the regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        htmlFor="description"
        error={errors?.description?.message}
      >
        <Textarea
          id="description"
          {...register("description", { required: "Description is required" })}
        />
      </FormRow>

      <FormRow label="Cabin photo (leave empty to keep current)" htmlFor="image">
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="button" onClick={onCloseForm}>
          Cancel
        </Button>
        <Button type="submit" disabled={isEditing}>
          Update cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default EditCabinForm;
