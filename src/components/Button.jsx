import { Link } from 'react-router-dom'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  white: 'btn-white',
  outline: 'btn-outline-light',
}

// Renders a link when `to` or `href` is given, otherwise a real button.
export default function Button({ children, variant = 'primary', to, href, className = '', ...props }) {
  const classes = `btn ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>
  if (href) return <a href={href} className={classes} {...props}>{children}</a>
  return <button className={classes} {...props}>{children}</button>
}
