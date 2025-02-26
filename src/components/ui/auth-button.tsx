
import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const AuthButton = React.forwardRef<HTMLButtonElement, AuthButtonProps>(
  ({ className, children, variant = 'primary', fullWidth = false, icon, ...props }, ref) => {
    return (
      <button
        className={cn(
          'relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none py-3 px-4',
          {
            'bg-brand-gold hover:bg-brand-gold-dark text-black focus:ring-brand-gold': variant === 'primary',
            'bg-white/10 hover:bg-white/20 text-white focus:ring-white/30': variant === 'secondary',
            'bg-transparent border border-white/30 hover:bg-white/10 text-white focus:ring-white/30': variant === 'outline',
            'w-full': fullWidth,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);

AuthButton.displayName = 'AuthButton';

export default AuthButton;
