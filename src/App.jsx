import Header from './components/Header'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import usePage from './hooks/usePage'

function App() {
  const page = usePage()

  return (
    <>
      <Header activePage={page} />
      <PageContent page={page} />
      <Footer />
    </>
  )
}

export default App
