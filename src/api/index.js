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
        'X-RapidAPI-Key': '18613ec72amsh4daed2f23f138b5p16f8d8jsnf1ceaee0803d',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
