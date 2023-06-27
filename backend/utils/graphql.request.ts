import axios from "axios";

export const sendGraphqlRequest = async(endpoint:string,query:string):Promise<string> =>{
    try {
        const response = await axios.post(endpoint, {
          query: query,
        });
        return response.data;
      } catch (error) {
        console.error(error);
        return "";
      }
}