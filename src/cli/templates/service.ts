import _ from "lodash";

export const getService = (feature: string) => {
  const Name = _.capitalize(feature);

  return `import axios from \"axios\";

  const API_BASE_URL = process.env.BASE_URL ;
  
  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      \"Content-Type\": \"application/json\",
    },
  });
  
  export const fetch${Name} = async (endpoint, params = {}) => {
    try {
      const response = await api.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const post${Name} = async (endpoint, data) => {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export default api;`;
};
