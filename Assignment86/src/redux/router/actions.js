
//Deletes a single booking chauffer based on the ID supplied
export function hit_Api_call_here(postdata) {
	return async (dispatch) => {
		try {
			var header = 'App headers';
			header['Authorization'] = 'Bearer token';

			var url = 'api end point';
			const response = await fetch(url, {
				method: 'DELETE',
				headers: header,
			});
			const responseJson = await response.json();
			// Send to Redux
			dispatch({
				type: 'DATA_LIST',
				data: responseJson,
			});
			return responseJson;
		} catch (error) {
			console.log("api_error==> " + error);
		}
	}
}
