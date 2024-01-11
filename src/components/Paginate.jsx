import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
const Paginate = ({ loadDataFn, data, pageChange, perPage = 10 }) => {

  const [rerender, setRerender] = useState(true)
  const pageCount = data?.total
  const totalPage = pageCount ? Math.ceil(pageCount / perPage) : 1

  useEffect(() => {
    if (pageChange === 1) {
      setRerender(false);
      const timeoutId = setTimeout(() => { setRerender(true); }, 10);
      return () => clearTimeout(timeoutId);
    }
  }, [pageChange]);
  return (
    <>
      <div className="flex items-center justify-between px-8 py-2 mt-5 bg-white bottom-1">
        <div className="">Total Data : {pageCount} </div>
        {rerender && <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={loadDataFn}
          pageRangeDisplayed={2}
          pageCount={totalPage}
          previousLabel="<"
          containerClassName="flex flex-row items-center justify-center gap-2 ml-4"
          activeClassName=" bg-primary text-white  rounded-md gap-2 border"
          pageClassName=" py-1 rounded-md gap-2 border "
          pageLinkClassName='flex flex-col px-2'
          renderOnZeroPageCount={1}
        />}
      </div>
    </>
  );
};

export default Paginate;