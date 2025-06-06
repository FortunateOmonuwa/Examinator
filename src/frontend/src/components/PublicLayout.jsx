import { Outlet } from "react-router-dom"
import PublicHeader from "./PublicHeader"
import Footer from "./Footer"

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout
