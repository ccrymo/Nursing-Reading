import Link from "next/link";

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-neutral-900 p-20 rounded-lg relative">
        <h2 className="text-3xl font-bold text-white mb-6"> Choose the slide </h2>
        <div className="flex flex-col space-y-4 ">
          
          <Link href="./components/Vocabulary">
            <button className="w-full  text-2xl font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-neutral-700 to-neutral-800 hover:from-amber-400 hover:to-amber-600 hover:text-amber-950 text-white">
              Vocabulary
            </button>
          </Link>
        
          <Link href="./components/Reading_Exam">
            <button className="w-full text-2xl font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-neutral-700 to-neutral-800 hover:from-amber-400 hover:to-amber-600 hover:text-amber-950 text-white">
              Exam
            </button>
          </Link>

          <Link href="./components/Reading_Skills">
            <button className="w-full text-2xl font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-neutral-700 to-neutral-800 hover:from-amber-400 hover:to-amber-600 hover:text-amber-950 text-white">
              Skills overview
            </button>
          </Link>

          <Link href="./components/PracticeExam">
            <button className="mt-10 w-full text-2xl font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-neutral-100 to-neutral-300 hover:from-amber-400 hover:to-amber-600 hover:text-amber-950 text-neutral-800">
              Practice Exam
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Modal;
