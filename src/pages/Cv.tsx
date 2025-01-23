import {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

// Ustawienia ścieżki do worker.js
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const CV = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Funkcja do obsługi załadowania dokumentu
  const onLoadSuccess = ({numPages}: {numPages: number}) => {
    setNumPages(numPages);
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center py-12 px-4 bg-gradient-to-r from-violet-700 to-purple-800 dark:from-violet-950 dark:to-purple-900 transition-all duration-300`}
    >
      <div className='text-center mb-8'>
        <h1 className='text-4xl text-white font-bold'>Moje CV</h1>
        <p className='text-lg text-white mt-2'>Tutaj znajdziesz moje pełne CV w formacie PDF.</p>
      </div>

      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
        <Document file='/cv_hd.pdf' onLoadSuccess={onLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>

      <div className='mt-8'>
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          className='px-4 py-2 bg-purple-600 text-white rounded-lg disabled:bg-gray-400'
        >
          Poprzednia
        </button>
        <button
          disabled={numPages ? pageNumber >= numPages : true}
          onClick={() => setPageNumber(pageNumber + 1)}
          className='px-4 py-2 ml-2 bg-purple-600 text-white rounded-lg disabled:bg-gray-400'
        >
          Następna
        </button>
      </div>
    </div>
  );
};

export default CV;
