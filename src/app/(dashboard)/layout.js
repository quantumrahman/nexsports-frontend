import '../globals.css';

export const metadata = {
    title: 'NexSports - Dashboard',
    description: '',
};

export default function DashbaordLayout({ children }) {
    return <main className="w-full min-h-screen">{children}</main>;
}
