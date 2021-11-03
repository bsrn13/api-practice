import axios from "axios";

// const hello = (a, b) => console.log(a * b);

// export default hello;

const getData = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + number
    );

    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + number
    );

    const object = {
      users: users,
      posts: posts,
    };
    resolve(object);
  });
};

getData(1)
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

export default getData;
