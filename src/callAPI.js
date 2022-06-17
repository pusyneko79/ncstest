import axiosClient from "./axiosClient";

class TodoApi {
    getAll = (params) => {
        const url = '/todos';
        return axiosClient.get(url, {params});
    }
};

const todoApi = new TodoApi();
export default todoApi;