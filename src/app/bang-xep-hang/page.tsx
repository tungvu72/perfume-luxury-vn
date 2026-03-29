import { redirect } from 'next/navigation';

// 301 Permanent Redirect: /bang-xep-hang → /nuoc-hoa-theo-nhu-cau
// This page has been retired. All traffic is redirected to the new search page.
export default function BangXepHangRedirect() {
    redirect('/nuoc-hoa-theo-nhu-cau');
}
