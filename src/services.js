import Amplify, { Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

export const uploadFile = async (file) => {
  const fileName = `${uuidv4()}-${file.name}`;
  try {
    const { key } = await Storage.put(fileName, file, {
      contentType: file.type,
    });
    const fileURL = await getFile(key);
    return fileURL;
  } catch (err) {
    console.log(err);
  }
};

export const getFile = async (fileName) => {
  const response = await Storage.get(fileName);
  return response;
};
