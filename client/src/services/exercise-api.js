import axios from "axios";

const exerciseApi = axios.create({
  baseURL: "/exercise"
});

export const createExercise = ({
  question,
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  solution
}) => {
  return new Promise((resolve, reject) => {
    exerciseApi
      .post("/math", {
        question,
        answerOne,
        answerTwo,
        answerThree,
        answerFour,
        solution
      })
      .then(response => {
        console.log(response);
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};
