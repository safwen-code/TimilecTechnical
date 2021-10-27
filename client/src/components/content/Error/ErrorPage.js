import styled from 'styled-components'
import colors from '../../../utils/colors.js'
const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

const Illustration = styled.img`
  max-width: 800px;
`
function ErrorPage() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oppssssssssssss.................</ErrorTitle>
      <Illustration src="https://media.istockphoto.com/photos/error-404-picture-id537812190?s=2048x2048" />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}
export default ErrorPage
