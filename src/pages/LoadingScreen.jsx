import { useEffect, useState } from 'react';

export function LoadingScreen({ onLoadingComplete }) {
const [isMinimizing, setIsMinimizing] = useState(false);

useEffect(() => {
// Start minimizing animation after 2 seconds
const minimizeTimer = setTimeout(() => {
    setIsMinimizing(true);
}, 850);

// Trigger loading complete after animation duration
const completeTimer = setTimeout(() => {
    onLoadingComplete();
}, 1600); // 2s delay + 1s animation

return () => {
    clearTimeout(minimizeTimer);
    clearTimeout(completeTimer);
};
}, [onLoadingComplete]);

return (
<div
    className={`fixed inset-0 bg-secondary flex items-center justify-center z-50 transition-opacity duration-1000 
    ${isMinimizing ? 'opacity-0' : 'opacity-100'}`}
>
    <img
    src="\src\public\mindease-logo.png"
    alt="mindEase Logo"
    className={`transition-transform duration-1000 
    ${isMinimizing ? 'scale-50' : 'scale-200'}`}
    style={{ width: '200px', height: 'auto' }}
    />
</div>
);
}
