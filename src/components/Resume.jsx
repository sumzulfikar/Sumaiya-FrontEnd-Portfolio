// import React from "react";
// import MyResume from '../resume/SZulfikar_CV_FrontEnd_Dev_latest.pdf';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { useState, useCallback } from "react";
// import { useResizeObserver } from '@wojtekmaj/react-hooks';

// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// //pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.mjs',
//     import.meta.url,
// ).toString();
// const options = {
//     cMapUrl: '/cmaps/',
// };
// const resizeObserverOptions = {};

// const maxWidth = 800;


// const Resume = () => {
//     const [file, setFile] = useState(MyResume);
//     const [numPages, setNumPages] = useState(null);
//     const [containerRef, setContainerRef] = useState < HTMLElement | null > (null);
//     const [containerWidth, setContainerWidth] = useState();
//     const onResize = useCallback < ResizeObserverCallback > ((entries) => {
//         const [entry] = entries;

//         if (entry) {
//             setContainerWidth(entry.contentRect.width);
//         }
//     }, []);
//     useResizeObserver(containerRef, resizeObserverOptions, onResize);

//     function onFileChange(event) {
//         const { files } = event.target;

//         const nextFile = files?.[0];

//         if (nextFile) {
//             setFile(nextFile);
//         }
//     }

//     function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//         if (nextNumPages) {
//             setNumPages(nextNumPages);
//         }
//     }

//     return (<>
//         <div className="mx-1 p-0 md:p-10 m-1">
//             <div className="Example__container__load">
//                 <label htmlFor="file">Load from file:</label>{' '}
//                 <input onChange={onFileChange} type="file" />
//             </div>
//             {numPages > 0 && (
//                 <div className="flex lg:flex-row  md:flex-row  sm:flex-col" ref={setContainerRef}>
//                     <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options} >
//                         {Array.from(new Array(numPages), (_el, index) => (
//                             <Page key={`page_${index + 1}`}
//                                 pageNumber={index + 1}
//                                 width={containerWidth ? Math.min(containerWidth, maxWidth) : 400} />
//                         ))}
//                     </Document>
//                 </div>)}
//             <button className="px-5 py-2 bg-gray-900 text-stone-50 rounded-full" disabled={currentPage === 1} onClick={prevPage}>Prev Page</button>
//             <button disabled={currentPage === pageCount} onClick={nextPage}>Next Page</button>

//         </div >



//     </>)
// }
// export default Resume;




// // const [currentPage, setCurrentPage] = useState(1);
// // const [pageCount, setPageCount] = useState(null);
// // const prevPage = () => {
// //     setCurrentPage(lastPage => Math.max(lastPage - 1, 1));
// // }
// // const nextPage = () => {
// //     setCurrentPage(lastPage => Math.min(lastPage + 1, pageCount));
// // }
// // const loadSuccess = ({ pageNum }) => {
// //     setPageCount(pageNum);
// //     setCurrentPage(1);

// // }
