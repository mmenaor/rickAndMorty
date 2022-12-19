import React from 'react';

const Pagination = ({ charsPerPage, totalChars, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalChars / charsPerPage); i++){
        pageNumbers.push(i);
    };

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <span onClick={() => paginate(number)} className="page-link">
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;