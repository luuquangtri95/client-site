import { useEffect, useRef, useState } from 'react'
import Pagination from '../../components/Pagination'
import Popup from '../../components/Popup'
import userApi from '../../services/userApi'
import { toast } from 'react-toastify'
import Loading from '../../components/Loading'

export const User = () => {
  const [userList, setUserList] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isDelete, setIsDelete] = useState(false)
  const [pagination, setPagination] = useState({})
  const [isShow, setIsShow] = useState(false)
  const [currentData, setCurrentData] = useState({})
  const [filters, setFilters] = useState({
    page: 1,
    limit: 2,
  })

  useEffect(() => {
    ;(async () => {
      try {
        const userList = await userApi.getAll(filters)

        const { data, pagination } = userList.DT

        setUserList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('fetching error')
      }

      setLoading(false)
    })()
  }, [filters, isDelete])

  const handlePageChange = (newPage) => {
    setFilters((prevState) => ({
      ...prevState,
      page: newPage,
    }))
  }

  const handleConfirmDeleteUser = async () => {
    try {
      await userApi.deleteUser(currentData.id)
      setIsDelete(true)
      toast.success('delete user successfully')
      setIsShow(false)
    } catch (error) {
      console.log('fetch to fail', error)
    }
  }

  const handleDeleteUser = (user) => {
    setCurrentData(user)
    setIsShow(true)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='user-container'>
      <h1>Table User</h1>
      <div className='action'>
        <button className='btn btn-success'>Refresh</button>
        <button className='btn btn-primary mx-2'>Add new user</button>
      </div>

      <div className='user-body'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>User Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Sex</th>
              <th scope='col'>Group</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>

          <tbody>
            {userList.length > 0 &&
              userList.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.sex}</td>
                  <td>{user.Group ? user.Group.name : ''}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => handleDeleteUser(user)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className='d-flex justify-content-center'>
          <Pagination pageCount={pagination._totalPage} onPageChange={handlePageChange} />
        </div>
      </div>

      <Popup
        show={isShow}
        onClose={setIsShow}
        data={currentData}
        onConfirm={handleConfirmDeleteUser}
      />
    </div>
  )
}
