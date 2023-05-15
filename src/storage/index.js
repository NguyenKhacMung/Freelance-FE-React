class LocalStorage {
  constructor(name) {
    this.name = name;
  }

  getLocalStorage() {
    return localStorage.getItem(this.name)
  }
  setLocalStorage(value) {
    return localStorage.setItem(this.name, JSON.stringify(value))
  }
  removeLocalStorage() {
    return localStorage.removeItem(this.name)
  }

  //sessionStorage
  getSessionStorage() {
    return sessionStorage.getItem(this.name)
  }
  setSessionStorage(value) {
    return sessionStorage.setItem(this.name, JSON.stringify(value))
  }
  removeSessionStorage() {
    return sessionStorage.removeItem(this.name)
  }
}

// const accessToken = new LocalStorage('access_token')
const userStorage = new LocalStorage('user')

export { userStorage }
