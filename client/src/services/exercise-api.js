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

export const interviewQuestion = ({
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
      .post("/create-interview-question", {
        question,
        optionOne,
        optionTwo,
        optionThree,
        optionFour,
        solution,
        description
      })
      .then(response => {
        console.log("From exercise api", response.data["exercise"]);
        resolve(response.data.exercise);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const listInterviewQuestion = () => {
  return new Promise((resolve, reject) => {
    exerciseApi
      .get("/create-interview-question")
      .then(response => {
        console.log("From list interview", response.data.exercise);
        resolve(response.data["exercise"]);
      })
      .catch(error => {
        reject(error);
      });
  });
};
