'use client';

import { fetchKeywords } from '@/lib/data';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Resultado } from '@/lib/definitions';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const Busqueda = () => {
  const [valorBusqueda, setValorBusqueda] = useState('Keywords');
  const [resultados, setResultados] = useState<Resultado[]>([]);

  const handleSearch = useDebouncedCallback(async (term) => {
    setValorBusqueda(term);

    try {
      const results = await fetchKeywords(term);
      setResultados(results);
    } catch (error) {
      console.error('Error al obtener los datos', error);
    }
  }, 300);

  return (
    <form>
      <p>
        <strong>Search</strong>
      </p>
      <input
        type="text"
        placeholder={valorBusqueda}
        className={inter.className}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      {resultados.length == 0 ? null : (
        <div className="resultados">
          <ul>
            {resultados?.map((item) => {
              return (
                <li>
                  <Link key={item.name} href={`/search/${item.name}`}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </form>
  );
};
