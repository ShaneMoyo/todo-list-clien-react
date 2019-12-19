import { request } from './request';

export default {
  get(id) {
    const path = id ? `/todos/${id}` : '/todos';
    return request.get(path);
  },

  getMy() {
    return request.get('/todos/me');
  },

  book(donation) {
    return request.post('/todos', donation);
  },

  update(appointment) {
    return request.update(`/todos/me/${appointment._id}`, appointment);
  },

  remove(id) {
    return request.delete(`/todos/${id}`);
  }
};
