'use client';

import { useState } from 'react';

interface EmailCopyProps {
  email: string;
  className?: string;
  iconSize?: number;
  showText?: boolean;
}

export default function EmailCopy({ email, className = '', iconSize = 20, showText = true }: EmailCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 ${className} ${copied ? 'opacity-100' : ''} transition-opacity`}
      title={copied ? 'Copied!' : 'Copy email address'}
    >
      {showText && <span>{email}</span>}
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={copied ? 'text-green-600' : ''}
      >
        {copied ? (
          <>
            <polyline points="20 6 9 17 4 12"></polyline>
          </>
        ) : (
          <>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </>
        )}
      </svg>
    </button>
  );
}

