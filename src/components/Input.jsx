import React from 'react';
import classNames from '../utils/classNames';

function Input(props) {
  const {
    label,
    Icon,
    description,
    showLabel = true,
    containerClassName = '',
    innerRef,
    onChange,
    ...inputProps
  } = props;

  return (
    <div className={classNames(containerClassName || '')}>
      <label
        htmlFor={inputProps.name}
        className={classNames(
          'text-sm font-medium text-gray-700 mb-1',
          showLabel ? 'block' : 'sr-only',
        )}
      >
        {label}
      </label>

      <div className="relative text-gray-400 focus-within:text-gray-600">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}

        <input
          {...inputProps}
          className={classNames(
            'input input-base',
            Icon ? 'pl-10' : 'pl-4',
          )}
          onChange={onChange}
          ref={innerRef}
        />
      </div>

      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
}

export default Input;
