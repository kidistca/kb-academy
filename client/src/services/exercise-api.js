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
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const multipleChoice = ({
  question,
  optionOne,
  optionTwo,
  optionThree,
  optionFour,
  solution,
  description
}) => {
  return new Promise((resolve, reject) => {
    exerciseApi
      .post("/multiple-choice", {
        question,
        optionOne,
        optionTwo,
        optionThree,
        optionFour,
        solution,
        description
      })
      .then(response => {
        console.log(response.data.user);
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};
