class Storage {
  set(key, data) {
    // Save data to sessionStorage
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  get(key) {
    // Get saved data from sessionStorage
    const data = sessionStorage.getItem(key);
    return JSON.parse(data);
  }

  remove(key) {
    sessionStorage.removeItem(key);
  }
}

const storage = new Storage();

export default storage;
