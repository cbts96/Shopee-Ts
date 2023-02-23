import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

interface Props {
  children?: React.ReactNode
}
const RegisterLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  )
}

export default RegisterLayout
