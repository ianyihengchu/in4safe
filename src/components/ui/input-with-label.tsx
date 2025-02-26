
import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputWithLabel = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-sm font-medium text-white/70">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`
              w-full bg-white/10 border border-white/20 text-white rounded-md px-4 py-3
              placeholder:text-white/40 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-transparent
              ${error ? 'border-red-500 focus:ring-red-500/50' : ''}
              ${className}
            `}
            {...props}
          />
          {error && (
            <div className="absolute -bottom-6 left-0 text-xs text-red-500 animate-fade-in">
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }
);

InputWithLabel.displayName = 'InputWithLabel';

export default InputWithLabel;
