import Header from "./Header";
import SideBar from "./SideBar";

function Layout({ children, isSinglePage }) {
  return (
    <>
      <Header />

      <main>
        {!isSinglePage ? (
          <section className="home flex">
            <div className="flex container">
              <SideBar />

              {children}
            </div>
          </section>
        ) : (
          children
        )}
      </main>
    </>
  );
}

export default Layout;
