import axios from "axios";

export const getPlacesData = async (type,sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'X-RapidAPI-Key': '797156b4efmsh22f273e1d61c047p18f929jsnc4e8f0bfd1e9',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
