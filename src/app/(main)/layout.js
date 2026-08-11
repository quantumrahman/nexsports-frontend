import '../globals.css';

export const metadata = {
    title: 'NexSports',
    description: '',
};

export default function MainLayout({ children }) {
    return (
        <main className="w-full min-h-screen flex items-center justify-between flex-col">
            {children}
        </main>
    );
}
