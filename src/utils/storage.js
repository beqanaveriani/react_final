const storage = (key) => ({
  get: () => {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  },
  set: (data) => {
    const set = JSON.stringify(data);
    localStorage.setItem(key, set);
    return set;
  },
  unset: () => localStorage.removeItem(key),
  isSet: () => !!localStorage.getItem(key),
});

export default storage;
