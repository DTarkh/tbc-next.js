import { Link } from '@/i18n/routing';


const Button = ({ href, name }) => {
    
  return (

    <button className="inline-block px-12 py-4 text-slate-100 bg-[#4B0082] hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-[#4B0082] transition-colors rounded-3xl w-[200px]">
    <Link href={href}>{name}</Link>
    </button>
    
  );
};

export default Button;