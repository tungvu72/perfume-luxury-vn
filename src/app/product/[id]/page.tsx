import { redirect } from 'next/navigation';

// Redirect /product/[id] → /san-pham/[id] (301 permanent)
export default async function OldProductRedirect({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    redirect(`/san-pham/${id}`);
}
