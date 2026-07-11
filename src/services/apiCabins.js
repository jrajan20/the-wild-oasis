import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  const hasImageFile = newCabin.image instanceof File;

  const imageName = hasImageFile
    ? `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    : null;

  const imageUrl = hasImageFile
    ? `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    : newCabin.image;

  const { data, error } = await supabase
    .from("Cabins")
    .insert([{ ...newCabin, image: imageUrl }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  if (hasImageFile) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      await supabase.from("Cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error("Cabin image could not be uploaded and the cabin was not created");
    }
  }

  return data;
}

export async function updateCabin(id, updatedCabin) {
  const hasImageFile = updatedCabin.image instanceof File;

  const imageName = hasImageFile
    ? `${Math.random()}-${updatedCabin.image.name}`.replaceAll("/", "")
    : null;

  const imageUrl = hasImageFile
    ? `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    : updatedCabin.image;

  const { data, error } = await supabase
    .from("Cabins")
    .update({ ...updatedCabin, image: imageUrl })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be updated");
  }

  if (hasImageFile) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, updatedCabin.image);

    if (storageError) {
      console.error(storageError);
      throw new Error("Cabin image could not be uploaded");
    }
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}
