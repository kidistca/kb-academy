import axios from "axios";

const authApi = axios.create({
  baseURL: "/auth"
});

export const signedIn = () =>
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

export const signUp = ({ name, email, password }) => {
  return new Promise((resolve, reject) => {
    authApi
      .post("/signup", { name, email, password })
      .then(response => {
        //console.log(response);
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const signIn = ({ email, password }) => {
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

export const signOut = () => {
  return new Promise((resolve, reject) => {
    authApi
      .post("/signout")
      .then(response => {
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const edit = ({ name, email }) =>
  new Promise((resolve, reject) => {
    authApi
      .post("/edit", { name, email })
      .then(response => {
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });

export const remove = () => {
  return new Promise((resolve, reject) => {
    authApi
      .delete("/delete")
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const uploadPicture = data => {
  return new Promise((resolve, reject) => {
    authApi
      .post("/upload", data)
      .then(response => {
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};
