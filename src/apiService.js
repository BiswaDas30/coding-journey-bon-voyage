
const API_BASE_URL = 'http://localhost:8081'; // Update with your actual API URL

export const getMovies = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/movies/movieList`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};