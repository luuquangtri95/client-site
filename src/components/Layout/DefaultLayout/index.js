import { Navigation } from '../../Navigation'
import { Header } from '../Commons/Header'

export const DefaultLayout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header>
        <Navigation />
      </Header>
      <div className='container'>
        <div className='content'> {children}</div>
      </div>
    </div>
  )
}
