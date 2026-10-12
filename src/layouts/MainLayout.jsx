import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function MainLayout() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <Navbar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      <main>
        <Outlet context={{ searchValue, setSearchValue }} />
      </main>

      <Footer />
    </>
  )
}