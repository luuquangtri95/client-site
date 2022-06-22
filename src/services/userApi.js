import axiosClient from './axiosClient'

const userApi = {
  getAll(params) {
    const url = '/user/read'
    return axiosClient.get(url, { params })
  },

  addNewUser(data) {
    const url = '/user/create'
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
    const url = `/user/delete/${id}`
    return axiosClient.delete(url)
  },
}

export default userApi
