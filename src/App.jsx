import { NavLink, Route, Routes } from "react-router-dom";
// import "./App.css";
import css from './App.module.css'
import clsx from "clsx";
import { Suspense, lazy } from "react";

const MailBoxPage = lazy(() => import('./pages/MailBoxPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'))
const Loader = lazy(() => import('./component/Loader/Loader'))


function App() {

const getNavLinkClass = ({isActive}) => clsx(css.navlink, {
  [css.active] : isActive
}) 

  return (
    <div>
      <header>
        <nav className={css.nav}>
          {/* <a target="blank" rel='noopener noreferrer' href="/products">Products</a> */}
          <NavLink className={getNavLinkClass} to="/">
            Home page
          </NavLink>
          <NavLink className={getNavLinkClass} to="/mailbox">
            MailBox
          </NavLink>
          <NavLink className={getNavLinkClass} to="/products">
            Products
          </NavLink>
          <NavLink className={getNavLinkClass} to="/search">
            Search
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mailbox" element={<MailBoxPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/:productId/*"
              element={<ProductDetailsPage />}
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}


export default App;
