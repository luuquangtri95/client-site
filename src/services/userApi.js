import axiosClient from './axiosClient'

const userApi = {
  getAll(params) {
    const url = '/users'
    return axiosClient.get(url, { params })
  },

  addNewUser(data) {
    const url = '/users'
    return axiosClient.post(url, data)
  },

  getById(data) {
    const url = `/user/${data.id}`
    return axiosClient.get(url)
  },

  updateUser(data) {
    const url = `/user/${data.id}`
    return axiosClient.patch(url, data)
  },

  deleteUser(id) {
    const url = `/user/${id}`
    return axiosClient.delete(url)
  },
}

export default userApi
