const ApiKey = import.meta.env.VITE_API_KEY;

export default async function fetchGif() {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=cat&limit=12&rating=g`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.data.length === 0) {
      return '';
    }
    const gifs = data.data;
    const list = [];
    gifs.map((gif) => {
      list.push({
        id: gif.id,
        name: gif.title,
        url: gif.images.original.url,
        clicked: false,
      });
    });
    return list;
  } catch (error) {
    console.error('Error: ', error);
  }
}
