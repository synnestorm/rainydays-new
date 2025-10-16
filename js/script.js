const options = {
  headers: {
    Authorization: `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3lubmVzdG9ybSIsImVtYWlsIjoic3luc3RvMDQxMTZAc3R1ZC5ub3JvZmYubm8iLCJpYXQiOjE3NjA2Mzk4MzV9.ZA4kVTLgWITqte46sk01bHxwGLrzsA8zkP5TlHzULUU}`, // your short-lived token
    "ddc32717-7e81-4b7d-8d17-b297cf026e79": apiKey.data.key, // your long-lived API key
  },
};

const response = await fetch("https://v2.api.noroff.dev/social/posts", options);
const data = await response.json();

console.log(data); // shows the data from API
