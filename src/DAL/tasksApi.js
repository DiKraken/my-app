import axios from "axios";
import {SERVER_API} from "./api";

const tasksApi = {
    getTasks: () => axios.get(`${SERVER_API}/tasks`)
}

export default tasksApi