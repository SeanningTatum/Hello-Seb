import React from 'react';
import classNames from '../utils/classNames';

function Card({
  likes,
  views,
  thumbnail,
  className,
}) {
  return (
    <div className={classNames('bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200', className)}>
      <div className="px-4 py-5 sm:p-6 h-40">
        <img src={thumbnail} alt="" className="object-cover" />
      </div>
      <div className="px-4 py-4 sm:px-6">
        <h1>
          Likes:
          {' '}
          {likes}
        </h1>
        <h3>
          Views:
          {' '}
          {views}
        </h3>
      </div>
    </div>
  );
}

export default Card;
