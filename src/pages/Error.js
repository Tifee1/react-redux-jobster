import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../assets/images/not-found.svg'

const Error = () => {
  document.title = 'JOBSTER || 404'

  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='error img' />
        <h3>page not found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`
export default Error