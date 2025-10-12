import Header from './layouts/Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main">{ children }</main>
    </>
  )
}