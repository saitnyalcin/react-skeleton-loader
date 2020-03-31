import React from 'react';
//import Skeleton from 'react-skeleton-loader';
import Skeleton from 'react-loading-skeleton';

const SkeletonComponent = ({ title, body }) => {
  return (
    <div style={{ fontSize: 20, lineHeight: 2 }}>
      <h1>
        {title} | <Skeleton width={800} />
      </h1>
      {body} | <Skeleton count={5} width={800} />
    </div>
  );
};
export default SkeletonComponent;
