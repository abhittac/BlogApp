export const getRequest = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    return response.json();
  };