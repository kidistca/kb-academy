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

//-----------------------------------Interview Question ----------------------------
//-----------------------------------Interview Question ----------------------------
//-----------------------------------Interview Question ----------------------------
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
        console.log("From interview api", response.data.exercise);
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
      .get("/list-interview-question")
      .then(response => {
        console.log("From list interview", response.data.exercise);
        resolve(response.data.exercise);
      })
      .catch(error => {
        reject(error);
      });
  });
};

//-----------------------------------Geo Question ----------------------------
//-----------------------------------Geo Question ----------------------------
//-----------------------------------Geo Question ----------------------------

export const geoQuestion = data => {
  const formData = new FormData();
  formData.append("question", data.question);
  formData.append("solution", data.solution);
  for (let answer of data.answers) formData.append(answer.id, answer.value);
  return new Promise((resolve, reject) => {
    exerciseApi
      .post("/create-geo", formData)
      .then(response => {
        console.log("From geo api", response.data.exercise);
        resolve(response.data.exercise);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const listGeoQuestion = () => {
  return new Promise((resolve, reject) => {
    exerciseApi
      .get("/list-geo-question")
      .then(response => {
        console.log("From list geo", response.data.exercise);
        resolve(response.data.exercise);
      })
      .catch(error => {
        reject(error);
      });
  });
};

// export const uploadGeoPicture = data => {
//   return new Promise((resolve, reject) => {
//     exerciseApi
//       .post("/upload", data)
//       .then(response => {
//         resolve(response.data.exercise);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };
