import { create } from 'apisauce';

const api = create({
  baseURL: 'https://5d2df37343c343001498d72a.mockapi.io',
});

export const getCases = () => api.get('/lawsuits');

export const getCase = id => api.get(`/lawsuits/${id}`);

export const getDetails = id => api.get(`/lawsuitDetails/${id}`);

export const getSteps = id => api.get(`/lawsuitSteps/${id}`);

export const getDocuments = id => api.get(`/lawsuitDocuments/${id}`);

export default api;
