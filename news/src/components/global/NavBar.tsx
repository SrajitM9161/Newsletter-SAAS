"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { navLinks } from '@/app/Common/links';
import { Dog } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

type Props = {};

const Navbar: React.FC<Props> = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isGuest) {
      router.push('/dashboard'); // Redirect to dashboard
      toast.error('For full access to features, please login.'); // Show toast notification

      // Redirect to sign-in after 2 minutes
      timer = setTimeout(() => {
        router.push('/sign-in');
      }, 2 * 60 * 1000); // 2 minutes in milliseconds
    }

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [isGuest, router]);

  const handleGuestLogin = () => {
    setIsGuest(true);
  };

  return (
    <>
      <Toaster /> {/* Toast Container */}
      <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
        <aside className="flex items-center gap-[2px]">
          <p className="text-3xl font-bold text-[#C33764]">News</p>
          <Dog />
          <p className="text-3xl font-bold text-[#1D2671]">Wave</p>
        </aside>
        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
          <ul className="flex items-center gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <aside className="flex items-center gap-4">
          {isSignedIn ? (
            <Link
              href="/dashboard"
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Let&apos;s Go to Dashboard 😎
              </span>
            </Link>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Login Please 😊
                </span>
              </Link>
              <button
                onClick={handleGuestLogin}
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Continue as Guest 🚀
                </span>
              </button>
            </>
          )}
          <MenuIcon className="md:hidden" />
        </aside>
      </header>
    </>
  );
};

export default Navbar;
