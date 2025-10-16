const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3lubmVzdG9ybSIsImVtYWlsIjoic3luc3RvMDQxMTZAc3R1ZC5ub3JvZmYubm8iLCJpYXQiOjE3NjA2NDIyODZ9.KOqvvVx5dORKTu_CjmYZ5xMZEzJ4JGy1H5kFxssSANY";
const options = {
  headers: {
    Authorization: `Bearer ${token}`, // my short-lived token; this will need to be updated
    "3a404182-2ca7-44dd-8445-61b7b878840f": apiKey.data.key, // my long-lived API key
  },
};

const response = await fetch("https://v2.api.noroff.dev/social/posts", options);
const data = await response.json();

console.log(data); // shows the data from API
