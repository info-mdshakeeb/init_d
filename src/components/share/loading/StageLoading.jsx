import { useEffect } from 'react';

import Toast from '../../../lib/toast';
import { SkeletonLoader } from './SkeletonLoader';


const StageLoading = ({ children, isLoading, isError, isSuccess, error, isFetching }) => {
  const { errorToast } = Toast()

  useEffect(() => {
    if (isError) { errorToast("internal server error") }
  }, [isError, error])
  return (
    <>
      {isLoading ?
        <SkeletonLoader /> :
        isError ? <div className="mt-10 text-red-400 ">
          {error?.data?.error || "internal server error"}
        </div> :
          isSuccess &&
          <>
            {isFetching && <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm">
            </div>}
            {children}
          </>
      }
    </>
  );
};

export default StageLoading;