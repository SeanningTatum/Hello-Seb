import React, { useEffect, useState } from 'react';
import { searchPixabay } from './api/pixabay';
import Card from './components/Card';
import Input from './components/Input';
import Loading from './components/Loading';
import useDebounce from './hooks/useDebounce';
import classNames from './utils/classNames';

function App() {
  // MARK:- State
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // MARK:- Variables
  const searchDebounced = useDebounce(search, 700);

  // MARK:- Effects
  useEffect(() => {
    if (searchDebounced) {
      setLoading(true);
      searchPixabay(searchDebounced)
        .then((response) => {
          setData(response.hits);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setData([]);
      setLoading(false);
    }
  }, [searchDebounced]);

  return (
    <div className="min-h-screen flex justify-center w-screen bg-gray-100 pb-24 px-4">
      <div className={classNames('max-w-xl w-full container flex justify-center flex-col', data.length > 8 && 'mt-8')}>

        <section className="w-full text-center">
          <h1 className="text-4xl mb-4 font-bold text-indigo-600">🚀 SeleGoogle 🚀</h1>
          <Input
            label="Search"
            placeholder="Search for anything! e.g: Yellow Flower"
            showLabel={false}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        <section className="mt-4 ">
          {loading ? (
            <div className="mx-auto w-full justify-center flex">
              <Loading />
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-4 grid-cols-2">
              {data.map((d) => (
                <Card
                  key={d.id}
                  views={d.views}
                  likes={d.likes}
                  thumbnail={d.previewURL}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
