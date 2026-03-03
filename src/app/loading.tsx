export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
            <div className="animate-pulse">
                <span className="text-2xl font-bold tracking-[6px] font-serif uppercase">MAISON DE SON</span>
            </div>
            <div className="mt-6 w-32 h-[2px] bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/3 rounded-full animate-[loading_1s_infinite_ease-in-out]" style={{ animation: 'loading 1s infinite ease-in-out' }} />
            </div>
        </div>
    );
}
