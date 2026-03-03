export default function Loading() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header placeholder */}
            <div className="h-16 border-b border-gray-100 flex items-center px-5 max-w-[1200px] mx-auto">
                <div className="w-32 h-6 bg-gray-50 animate-pulse rounded" />
            </div>

            <main className="max-w-[1200px] mx-auto px-5 pt-10">
                {/* Breadcrumbs placeholder */}
                <div className="flex gap-2 mb-8">
                    <div className="w-16 h-3 bg-gray-50 animate-pulse rounded" />
                    <div className="w-16 h-3 bg-gray-50 animate-pulse rounded" />
                    <div className="w-16 h-3 bg-gray-50 animate-pulse rounded" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {/* Image Placeholder */}
                    <div className="aspect-[4/5] bg-gray-50 animate-pulse rounded-2xl" />

                    {/* Content Placeholder */}
                    <div className="space-y-6">
                        <div className="w-1/3 h-4 bg-gray-50 animate-pulse rounded" />
                        <div className="w-3/4 h-12 bg-gray-50 animate-pulse rounded" />
                        <div className="w-full h-32 bg-gray-50 animate-pulse rounded" />

                        <div className="grid grid-cols-2 gap-4 mt-10">
                            <div className="h-20 bg-gray-50 animate-pulse rounded-xl" />
                            <div className="h-20 bg-gray-50 animate-pulse rounded-xl" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
