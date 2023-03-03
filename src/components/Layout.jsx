import { Header } from './Header';
import { SideBar } from './SideBar';

function Layout({ children, isSinglePage }) {
  return (
    <>
        <Header/>

        {!isSinglePage ? (
			<main>
				<section className='home flex'>
					<div className="flex container">
                        <SideBar  />
                        {children}
                    </div>
				</section>
			</main>
		) :(
				children
			)
        }

    </>
  )
}

export default Layout;