import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const loginUser = async (username, password) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`, {
            params: { username, password },
        });
        if (response.data.length > 0) {
            return response.data[0]; // Return the first matching user
        } else {
            throw new Error('Invalid username or password');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};
