import { redirect } from 'next/navigation';

// Redirect /product/[id] → /[id] (permanent)
export default async function OldProductRedirect({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    redirect(`/${id}`);
}
