import { getCategories } from '@/lib/api';
import css from './Header.module.css';
import Link from 'next/link';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';

const Header = async () => {
    const categories = await getCategories();

    return (
        <header className={css.header}>
            <Link href='/' aria-label='Home'>
                NoteHub
            </Link>
            <nav aria-label='Main Navigation'>
                <ul className={css.navigation}>
                    <li>
                        <CategoriesMenu categories={categories} />
                    </li>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul> 
            </nav>
        </header>
    );
};

export default Header;