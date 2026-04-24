import { SiteHeader } from "@/components/site-header";
import { ZooDashboard } from "@/components/zoo-dashboard";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <SiteHeader />
      <ZooDashboard />
    </main>
  );
}
