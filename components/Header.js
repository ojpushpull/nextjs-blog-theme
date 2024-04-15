import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-11 pb-12">
      <div className="w-screen h-auto square-full block mx-auto mb-4 bg-green-600 opacity-50"  />
      <p className="text-6xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
