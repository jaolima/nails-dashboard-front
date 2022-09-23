import axios from 'axios';

// Sistema
const api = axios.create({
  baseURL: `http://localhost:3333/`,
});
export default api;

// export const configRequest = () => {
//   const { 0: userCookie } = getUserCookie() || {};
//   const {
//     original: { data, access_token: token },
//   } = userCookie || { original: {} };

//   return {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : '',
   
//     },
//   };
// };
