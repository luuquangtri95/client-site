import { useEffect } from 'react'

export const Home = () => {
  useEffect(() => {
    ;(async () => {
      const res = await fetch('http://localhost:8081/api/users')
      const data = await res.json()
      console.log(data)
    })()
  }, [])

  return <div>HOME PAGE</div>
}
