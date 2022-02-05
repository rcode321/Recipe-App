// import axios from "axios";

// export const API_URI = "http://localhost:3001";

// export const getAllRecipesRequest = ({
// 	onRequest = () => null,
// 	onSuccess = () => null,
// 	onFailed = () => null,
// }) => {
// 	onRequest();
// 	axios
// 		.get(`${API_URI}/recipes`)
// 		.then((payload) => {
// 			onSuccess(payload);
// 		})
// 		.catch((e) => {
// 			onFailed(e);
// 			console.error("Recipes Request", e);
// 		});
// };

// export const getRecipeRequest = ({
// 	uuid,
// 	onRequest = () => null,
// 	onSuccess = () => null,
// 	onFailed = () => null,
// }) => {
// 	onRequest();
// 	axios
// 		.get(`${API_URI}/recipes/${uuid}`)
// 		.then((payload) => {
// 			onSuccess(payload);
// 		})
// 		.catch((e) => {
// 			onFailed(e);
// 			console.error("Recipe Request", e);
// 		});
// };
