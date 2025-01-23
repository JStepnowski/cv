import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import React, {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

import {motion} from 'framer-motion';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CV = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onLoadSuccess = ({numPages}: {numPages: number}) => {
    setNumPages(numPages);
  };

  const onError = (error: any) => {
    console.error('PDF rendering error:', error);
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center py-12 px-6 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-[hsl(var(--primary-foreground))] transition-all duration-500'>
      <div className='text-center mb-8'>
        <motion.h1
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className='text-4xl font-bold text-shadow mb-4'
        >
          Moje CV
        </motion.h1>
        <p className='text-lg'>Tutaj znajdziesz moje pełne CV w formacie PDF.</p>
      </div>

      <div className='bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-6 rounded-lg shadow-lg mb-8 bg-opacity-80'>
        <Document
          file={`${process.env.PUBLIC_URL}/cv.pdf`}
          onLoadSuccess={onLoadSuccess}
          onLoadError={onError}
          onError={onError}
        >
          <Page pageNumber={pageNumber} width={800} className='react-pdf__Page' />
        </Document>
      </div>

      <div className='mt-8'>
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          className='px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg disabled:bg-gray-400 transition-all'
        >
          Poprzednia
        </button>
        <button
          disabled={numPages ? pageNumber >= numPages : true}
          onClick={() => setPageNumber(pageNumber + 1)}
          className='px-4 py-2 ml-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg disabled:bg-gray-400 transition-all'
        >
          Następna
        </button>
      </div>

      <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download='cv.pdf'>
        <button className='px-6 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg mt-4'>
          Pobierz moje CV
        </button>
      </a>
    </div>
  );
};

export default CV;
