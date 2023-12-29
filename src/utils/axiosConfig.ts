import axios from 'axios';


const axiosConfig = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// const isAuthenticated = true; // Replace with your authentication logic

// if (isAuthenticated) {
//     const token = 'your-auth-token'; // Replace with your actual token
//     axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

export default axiosConfig;
