// components/ClientOnlyCustomCursor.jsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import the CustomCursor component with SSR disabled
const CustomCursor = dynamic(() => import('./CustomCursor'), { ssr: false });

export default CustomCursor;
