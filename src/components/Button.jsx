// src/components/Button.jsx
function Button({ type = 'primary', size = 'medium', children, ...props }) {
  const baseStyles = 'inline-block rounded-lg font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    small: 'py-1 px-2 text-sm',  // 16px height with padding
    medium: 'py-2 px-4 text-base',  // 24px height with padding
    large: 'py-3 px-6 text-lg',  // 32px height with padding
  }[size];

  const typeStyles = {
    primary: 'bg-primary text-slate-50 hover:bg-dark-primary',
    secondary: 'bg-secondary text-slate-50 hover:bg-dark-secondary',
    tertiary: 'bg-white border border-primary text-primary hover:bg-primary hover:text-white',
  }[type];

  return (
    <button className={`${baseStyles} ${sizeStyles} ${typeStyles}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
