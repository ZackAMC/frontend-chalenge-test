import { fetchKeywords } from '@/lib/data';

export default function SearchPage({ params }: { params: { name: string } }) {
  return (
    <div>
      <h1>{params.name}</h1>
    </div>
  );
}
