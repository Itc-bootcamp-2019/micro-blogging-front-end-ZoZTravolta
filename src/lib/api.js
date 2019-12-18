import axios from "axios";
const baseUrl = "https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet";

export function getAllTweetsFromServer(productId) {
   return axios.get(`${baseUrl}`);
}
// export function deleteProduct(productId) {
//     return axios.delete(`${baseUrl}/products/${productId}`);
// }
export function addTweetToServer(userName, content, date) {
   return axios.post(`${baseUrl}`, { tweet: { content: content, userName: userName, date: date } });
}