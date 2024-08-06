// this indicates no matter what execute on server (irrelevant wether we're on client/server).
"use server";

export const handleCreateUser = (formData: FormData) => {
  console.log("handleCreateUser: ", formData);
};
