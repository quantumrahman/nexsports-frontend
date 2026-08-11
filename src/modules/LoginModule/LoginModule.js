'use client';

import { FcGoogle } from 'react-icons/fc';

import LoginForm from '@/components/ui/LoginForm/LoginForm';
import Link from 'next/link';

export default function LoginModule() {
    return (
        <section className="w-full max-w-[400px] p-2 bg-white border border-neutral-200/50 rounded-2xl">
            <div className="w-full bg-neutral-50 rounded-2xl p-4">
                <div className="w-full text-center">
                    <h1 className="text-lg uppercase text-neutral-950 font-bold">
                        Nex<span className="text-green-600">Sports</span>
                    </h1>
                    <span className="text-base font-bold text-neutral-950 mt-4 block">
                        Login to NexSports
                    </span>
                    <p className="text-sm font-medium text-neutral-600 mt-1">
                        Welcome back! Please sign in to continue
                    </p>
                </div>
                <button
                    type="button"
                    aria-label="button"
                    role="button"
                    className="w-full rounded-lg border border-neutral-200 flex items-center justify-center gap-2 mt-4 py-1.5 bg-transparent hover:bg-neutral-100 transition-all duration-200 ease-linear cursor-pointer"
                >
                    <FcGoogle className="text-xl" />
                    <span className="text-base font-medium text-neutral-600">Google</span>
                </button>
                <div className="w-full flex items-center justify-center gap-2 my-4">
                    <div className="w-full bg-linear-to-l to-transparent from-neutral-200 h-px mt-0.5"></div>
                    <span className="text-sm font-medium text-neutral-500">or</span>
                    <div className="w-full bg-linear-to-l to-neutral-200 from-transparent h-px mt-0.5"></div>
                </div>
                <LoginForm />
            </div>
            <div className="w-full text-center pt-3 pb-2">
                <p className="text-sm text-neutral-600 font-medium">
                    Don’t have an account?{' '}
                    <Link href={'/auth/register'} className="text-green-600 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </section>
    );
}
