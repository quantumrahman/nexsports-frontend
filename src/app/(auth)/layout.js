import '../globals.css';

export const metadata = {
    title: 'NexSports - Authentication',
    description: '',
};

export default function AuthLayout({ children }) {
    return <main className="w-full min-h-screen flex items-center justify-center">{children}</main>;
}
