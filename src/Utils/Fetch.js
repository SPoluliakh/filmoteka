import axios from 'axios';

const API_KEY = `21ae8667e2d219d1bbc4eb64edced0b5`;

export const fetch = async (period, page) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    page: page,
  });
  const url = `https://api.themoviedb.org/3/trending/movie/${period}?${searchParams}`;
  const response = await axios.get(url);

  return response;
};

export const fetchById = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  const url = `https://api.themoviedb.org/3/movie/${id}?${searchParams}`;
  const response = await axios.get(url);
  return response;
};

export const fetchCast = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?${searchParams}`;
  const response = await axios.get(url);
  return response;
};

export const fetchReview = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?${searchParams}`;
  const response = await axios.get(url);
  return response;
};

export const fetchByName = async (name, page) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: page,
    include_adult: false,
    query: `${name}`,
  });
  const url = `https://api.themoviedb.org/3/search/movie?${searchParams}`;
  const response = await axios.get(url);
  return response;
};

export const fetchTrailers = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?${searchParams}`;
  const response = await axios.get(url);
  return response;
};
