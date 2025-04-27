import axios from 'axios';

// הגדרת הכתובת כ-default
axios.defaults.baseURL = "http://localhost:5083";



//מכיוון שהגדרנו את הכתובת כברירת מחדל, איננו צריכים להשתמש בכל הנתיב, אלא ניתן להשתמש ב"סלש" ואחריו סוג בקשת הHTTP
export default {
    getTasks: async () => {
        try {
            const result = await axios.get(`/get`);
            return result.data;
        } catch (error) {
            console.error("Error fetching tasks:", error);
            throw error; // או החזר ערך ברירת מחדל
        }
    },

    addTask: async (name) => {
        try {
            const result = await axios.post(`/post`, { name });
            return result.data;
        } catch (error) {
            console.error("Error adding task:", error);
            throw error; // או החזר ערך ברירת מחדל
        }
    },

    setCompleted: async (id, isComplete) => {
        try {
            const result = await axios.put(`$/put/${id}`, { isComplete });
            return result.data;
        } catch (error) {
            console.error("Error updating task completion status:", error);
            throw error; // או החזר ערך ברירת מחדל
        }
    },

    deleteTask: async (id) => {
        try {
            const result = await axios.delete(`$/delete/${id}`);
            return result.data;
        } catch (error) {
            console.error("Error deleting task:", error);
            throw error; // או החזר ערך ברירת מחדל
        }
    }
};
