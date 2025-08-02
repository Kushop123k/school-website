import { Link } from 'react-router-dom'; export default function Header() { return (
<header className="bg-blue-900 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Smart School Companion</h1>
        <nav className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/admin">Admin</Link>
        </nav>
    </div>
</header>
); }