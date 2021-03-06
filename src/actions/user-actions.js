import axios from 'axios'

const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/api'
// const ROOT_URL = 'http://localhost:9090/api'

export function createUser(user) {
  return new Promise((resolve, reject) => {
    axios.post(`${ROOT_URL}/signup`, user).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function loginUser(user) {
  return new Promise((resolve, reject) => {
    axios.post(`${ROOT_URL}/signin`, user).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/users`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function fetchUser(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/user/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function deleteUser(id) {
  return new Promise((resolve, reject) => {
    axios.delete(`${ROOT_URL}/user/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function fetchSearchedUsers(id, searchTerm) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/users/${id}&${searchTerm}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function toggleNotifications(id, active) {
  return new Promise((resolve, reject) => {
    axios.put(`${ROOT_URL}/user/notifications/${id}`, { active }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function updateVisibility(id, type) {
  return new Promise((resolve, reject) => {
    axios.put(`${ROOT_URL}/user/visible/${id}`, { type }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function getFormattedNotifications(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/user/notifications/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function deleteNotification(id, notificationId) {
  return new Promise((resolve, reject) => {
    axios.delete(`${ROOT_URL}/user/notifications/${id}&${notificationId}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
