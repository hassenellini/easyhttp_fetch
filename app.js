const http = new EasyHTTP();

/* http.get('https://jsonplaceholder.typicode.com/users')
              .then(data=>console.log(data))
              .catch(err=>console.log(err)); */

// User Data
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "jdoe@gmail.com"
};
/* http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .catch(err => console.log(err)); */

/* http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then(data => console.log(data))
  .catch(err => console.log(err)); */

  http
  .delete("https://jsonplaceholder.typicode.com/users/2", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
