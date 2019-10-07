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

export const geoQuestion = data => {
  new Promise((resolve, reject) => {
    const formData = new FormData();
    for (let prop in data) formData.append(prop, data[prop]);
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
