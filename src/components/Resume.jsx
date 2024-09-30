import React from "react";
import MyResume from '../resume/SZulfikar_CV_FrontEnd_Dev_latest.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(null);
    const prevPage = () => {
        setCurrentPage(lastPage => Math.max(lastPage - 1, 1));
    }
    const nextPage = () => {
        setCurrentPage(lastPage => Math.min(lastPage + 1, pageCount));
    }
    const loadSuccess = ({ pageNum }) => {
        setPageCount(pageNum);
        setCurrentPage(1);

    }

    return (<>
        <div className="mt-4 align-middle p-10">
            <Document file={MyResume} onLoadSuccess={loadSuccess} >
                <Page pageNumber={currentPage} width={800} />
            </Document>

            <button disabled={currentPage === 1} onClick={prevPage}>Prev Page</button>
            <button disabled={currentPage === pageCount} onClick={nextPage}>Next Page</button>

        </div >



    </>)
}
export default Resume;




