import Header from "../components/Header.js";
import Menu from "../components/Menu.js";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <Menu />
      <div title="Página não encontrada">
        <section className="not-found card">
          <div>
            <h1>Page Not Found </h1>
          </div>
          <div className="card-body">
            <p>
              The url you're trying to reach doesn't exist. Try navigating
              clicking through the menu below.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
