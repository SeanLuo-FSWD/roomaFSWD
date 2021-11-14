import axios from "axios";
import { server_api } from "../config/env.config";
import api from "./axios";

const serverCrash =
  "Wow the server MAY have crashed...be a hero, and tell Hailey, Jason or Sean ASAP. Please also remember the steps leading to this.";

const createRoom = (room_obj, cb) => {
  axios
    .post(`${server_api}room/create`, room_obj, {
      withCredentials: true,
    })
    .then((response) => {
      console.log("createRoom response");
      console.log(response);
      cb(null, response);
    })
    .catch((error) => {
      console.log("createRoom error");
      console.log(error);
      console.log(error.response);
      console.log(error.response.data);

      if (!error.response) {
        cb(new Error(serverCrash));
      } else {
        cb(
          "Room creation failed, please check your credential, or contact Hailey, Jason or Sean"
        );
      }
    });
};

const joinRoom = async (file) => {
  const uploadUrl = (await api.get("/s3url")).data.uploadUrl;

  console.log("bbbbbbbbbbbbbbbbbb");
  console.log(uploadUrl);
  const {
    config: { url },
  } = await api.put(uploadUrl, file, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: false,
  });

  return url;
};

export { createRoom, joinRoom };
