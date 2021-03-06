import axios from 'axios';

// Deployment URLS
export const rootURL = 'http://13.58.89.254/';
export const apiURL = rootURL + 'api/';
export const staticURL = rootURL + 'staticfiles/images/';


// Local Docker URLS
// export const rootURL = 'http://127.0.0.1/';
// export const apiURL = rootURL + 'api/';
// export const staticURL = rootURL + 'staticfiles/images/';

// Development URLS
// export const rootURL = 'http://localhost:8000/';
// export const apiURL = rootURL + 'api/';
// export const staticURL = rootURL + 'static/images/';

const axiosInstance = axios.create({
    baseURL: apiURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'Bearer ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;

		if (typeof error.response === 'undefined') {
			alert(
				'A server/network error occurred. ' +
					'Looks like CORS might be the problem. ' +
					'Sorry about this - we will get it fixed shortly.'
			);
			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			originalRequest.url === apiURL + 'token/refresh/'
		) {
		    console.log('error refreshing token');
			window.location.href = '/signout';
			return Promise.reject(error);
		}

		if (
			error.response.data.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
		) {
			const refreshToken = localStorage.getItem('refresh_token');

			if (refreshToken === 'undefined') {
			    console.log('undefined refresh token');
			    window.location.href = '/signout';
			}

			if (refreshToken) {
				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

				// exp date in token is expressed in seconds, while now() returns milliseconds:
				const now = Math.ceil(Date.now() / 1000);
				console.log(tokenParts.exp);

				if (tokenParts.exp > now) {
					return axiosInstance
						.post('token/refresh/', { refresh: refreshToken })
						.then((response) => {
							localStorage.setItem('access_token', response.data.access);
							localStorage.setItem('refresh_token', response.data.refresh);

							axiosInstance.defaults.headers['Authorization'] =
								'Bearer ' + response.data.access;
							originalRequest.headers['Authorization'] =
								'Bearer ' + response.data.access;

							return axiosInstance(originalRequest);
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					console.log('Refresh token is expired', tokenParts.exp, now);
					window.location.href = '/signout';
				}
			} else {
				console.log('Refresh token not available.');
				window.location.href = '/signout';
			}
		}

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);

export default axiosInstance;