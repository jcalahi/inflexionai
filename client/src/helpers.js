import axios from "axios";

export const uploadAudio = async (blob) => {
  const formData = new FormData();
  formData.append("recording", blob);
  const {
    data: { filename },
  } = await axios.post("/api/fileupload", formData);
  return filename;
};
