import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID F9zylSDtKb4liWGx8zwZjOP1XCD-1V0y_-B8wN-k4Tw"
  }
});
