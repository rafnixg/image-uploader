export const getFileFromDrop = (event) => event.dataTransfer.files[0];
export const getFileFromInput = (event) => event.target.files[0];
export const isImage = (file) => (file.type.startsWith("image/") ? true : false);
