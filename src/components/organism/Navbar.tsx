import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/useTheme';
import Logo from '../atom/Logo';

export default function Navbar() {
    const { effective, toggle } = useTheme();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    };

    return (
        <div className="fixed bg-accent h-full max-h-16 left-0 right-0 z-99">
            <div className="w-full px-8 h-full flex items-center justify-between text-primary">
                <div className="w-15">
                    {/* Inline SVG logo uses currentColor so its color follows the surrounding text color */}
                    <Logo className="w-full text-primary" ariaLabel="Logo" />
                </div>
                <nav>
                    <ul className="flex gap-30 font-title text-lg">
                        <li><a href="#about" className="hover:underline">Sobre</a></li>
                        <li><a href="#projects" className="hover:underline">Projetos</a></li>
                        <li><a href="#contact" className="hover:underline">Contato</a></li>
                    </ul>
                </nav>
                <div className="w-15 flex items-end justify-end">
                    <button
                        type="button"
                        onClick={toggle}
                        onKeyDown={handleKeyDown}
                        aria-label="Alternar tema"
                        title="Alternar tema"
                        aria-pressed={effective === 'dark'}
                        className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-primary/10 cursor-pointer"
                    >
                        {effective === 'dark' ? (
                            <Sun className="w-6 h-6" aria-hidden="true" />
                        ) : (
                            <Moon className="w-6 h-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
