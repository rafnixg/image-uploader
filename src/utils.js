export const getFile = (event) => event.dataTransfer.files[0];
export const isImage = (file) => (file.type.startsWith("image/") ? true : false);
