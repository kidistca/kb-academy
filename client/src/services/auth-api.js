import axios from "axios";

const authApi = axios.create({
  baseURL: "/auth"
});

export const SignedIn = () =>
  new Promise((resolve, reject) => {
    authApi
      .get("/signedin")
      .then(response => {
        const user = response.data.user;
        resolve(user);
      })
      .catch(error => {
        reject(error);
      });
  });

export const SignUp = ({ name, email, password }) => {
  return new Promise((resolve, reject) => {
    authApi
      .post("/signup", { name, email, password })
      .then(response => {
        console.log(response);
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const SignIn = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    authApi
      .post("/signin", { email, password })
      .then(response => {
        // console.log(response.data.user.name);
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const SignOut = () => {
  return new Promise((resolve, reject) => {
    authApi
      .post("/signout")
      .then(response => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};
