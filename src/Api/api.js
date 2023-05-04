import axios from "axios";

const API_KEY = "34700186-64fa17513eb3359bd5c913c6b";

export const fetchImages = async searchQuery => {
    const response = await axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response
}

export default {
    fetchImages,
  };