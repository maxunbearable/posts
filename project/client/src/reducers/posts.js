import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../constants/action-types";

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case DELETE:
            return posts.filter(post => post._id !== action.payload._id);
        case UPDATE:
        case LIKE:
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        default:
            return posts;
    }
}