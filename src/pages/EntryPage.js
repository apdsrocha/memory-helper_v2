import React, { lazy, Suspense } from 'react';
import Header from "../components/Header.js"
import Menu from "../components/Menu.js"

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
          <Suspense fallback={renderLoader()}>
            <Entry id={id} />
          </Suspense>
        </main>
      </div>
    );
}