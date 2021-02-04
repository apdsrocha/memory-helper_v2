import Header from "../components/Header.js";
import Menu from "../components/Menu.js";
import Entries from "../components/Entries.js";
import AddEntryBtn from "../components/AddEntryBtn.js"

export default function EntriesPage() {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <AddEntryBtn />
        <Entries />
      </main>
    </>
  );
}
