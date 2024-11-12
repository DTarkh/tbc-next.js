import { Link } from '@/i18n/routing';


const Button = ({ href, name }) => {
    
  return (

    <button className="inline-block px-12 py-4 text-slate-100 bg-red-600 hover:bg-cyan-600 transition-colors rounded-3xl">
    <Link href={href}>{name}</Link>
    </button>
    
  );
};

export default Button;