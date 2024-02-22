const BASE_URL = '<API_BASE_URL>';

export const fetchData = async (param) => {
  try {
    const response = await fetch(`${BASE_URL}/endpoint?param=${param}`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};