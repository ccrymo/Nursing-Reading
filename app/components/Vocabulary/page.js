import Link from "next/link";

export default function Home() {
  const chapters = [
    { id: 1, title: "Chapter 1", path: "./books/reading/chapters/ch1" },
    { id: 2, title: "Chapter 2", path: "./books/reading/chapters/ch2" },
    { id: 3, title: "Chapter 3", path: "./books/reading/chapters/ch3" },
    { id: 6, title: "Chapter 4", path: "./books/reading/chapters/ch4" },
    { id: 7, title: "Chapter 6", path: "./books/reading/chapters/ch6" },
  

  ];

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="flex flex-col mb-10 items-center justify-center top-0 text-4xl md:text-4xl lg:text-6xl font-bold text-neutral-400">
        Basic Reading 1
     
      </h1>
      <ul className="space-y-3 ">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link
              href={chapter.path}
              className="text-2xl md:text-3xl lg:text-4xl font-bold hover:text-sky-200"
            >
              <button className="flex flex-col max-w-screen-sm mb-2 bg-gradient-to-r from-neutral-700 to-neutral-900 hover:from-amber-400 hover:to-amber-600 hover:text-amber-950 text-white font-bold py-4 px-20 items-center">
                {chapter.title}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
