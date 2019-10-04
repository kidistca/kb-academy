import axios from "axios";

const exerciseApi = axios.create({
  baseURL: "/exercise"
});

export const createExercise = ({ answer, solution }) => {
  return new Promise((resolve, reject) => {
    exerciseApi
      .post("/create-exercise", {
        answer,
        solution
      })
      .then(response => {
        //console.log("RESPONSE", response);
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};
