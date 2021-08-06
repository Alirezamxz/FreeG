import { get } from "../config/api";

export const Games = {
  getAll: (platform, sort) =>
    get(`/games?platform=${platform}&?sort-by=${sort}`),
  getById: id => get(`/game?id=${id}`),
};
