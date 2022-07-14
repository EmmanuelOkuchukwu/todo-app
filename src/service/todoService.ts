import axios from 'axios';

const headersOptions = {headers: { 'content-type': 'application/json' }}

export const fetchAll = async () => {
    const response = await axios.get('/api/todo');
    return response.data;
};

export const create = async (formData: { title: string; content: string }) => {
    const response = await axios.post('/api/todo', formData, headersOptions);
    return response.data;
};

export const updateOneTodo = async (formData: any, id: string) => {
    const response = await axios.put(`/api/todo/${id}`, formData, headersOptions);
    return response.data;
};

export const deleteOneTodo = async (id: string) => {
    const response = await axios.delete(`/api/todo/${id}`);
    return response.data;
};