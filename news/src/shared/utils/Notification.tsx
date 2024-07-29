"use client";
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Notification = () => {
  const router = useRouter();

  useEffect(() => {
    // Function to check if the user is on a mobile device or viewport width is small
    const checkMobileDevice = () => {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      const isSmallViewport = window.innerWidth <= 768; // You can adjust the breakpoint if needed

      if (isMobile || isSmallViewport) {
        toast.error('This website is best experienced on a desktop due to high-end editing and features.');
        
        // Redirect after 1 second
        setTimeout(() => {
          router.push('/');
        }, 1000); // 1000 milliseconds = 1 second
      }
    };

    checkMobileDevice(); // Check on component mount

    // Optional: Check on viewport resize
    window.addEventListener('resize', checkMobileDevice);
    return () => window.removeEventListener('resize', checkMobileDevice);
  }, [router]);

  return null;
};

export default Notification;
