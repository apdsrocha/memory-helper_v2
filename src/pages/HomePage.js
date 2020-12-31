import Header from "../components/Header.js";
import Menu from "../components/Menu.js";
import Form from "../components/Form.js";

export default function HomePage(props) {
  return (
    <div className="App">
      <Header />
      <Menu />
      <main className="hide-on-desktop">
        <Form history={props.history} />
      </main>
      <aside className="hide-on-mobile card desktop-note">
        <h3>Hi there! </h3>
        <p className="desktop-note_p">
          This doesn't look too good on desktop, you can either resize the
          browser window to make it smaller or view it on a mobile device :)
        </p>
      </aside>
    </div>
  );
}
