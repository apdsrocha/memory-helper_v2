import React, { lazy, Suspense } from 'react';
import Header from "../components/Header.js"
import Menu from "../components/Menu.js"
import AddEntryBtn from "../components/AddEntryBtn.js"


const Entry = lazy(() => import('../components/Entry.js'));
const renderLoader = () => <p>Loading</p>;

export default function EntryPage(props)
{
  const params = new URLSearchParams(props.location.search);
  const id = params.get('id');

    return (
      <div className="App">
        <Header />
        <Menu />
        <main>
          <AddEntryBtn />
          <Suspense fallback={renderLoader()}>
            <Entry id={id} />
          </Suspense>
        </main>
      </div>
    );
}