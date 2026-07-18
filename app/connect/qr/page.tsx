import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Builder meetup QR",
  robots: { index: false, follow: false },
};

export default function ConnectQrPage() {
  return (
    <main id="main" className="flex min-h-screen items-center justify-center bg-paper px-5 py-8">
      <section className="w-full max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp">Ether Labs / Builder meetup</p>
        <h1 className="mt-3 text-3xl font-thin text-ink">Scan to stay connected</h1>
        <div className="mx-auto mt-7 overflow-hidden rounded-2xl bg-[#f5efe1] p-3 shadow-lifted">
          <Image
            src="/connect-qr.svg"
            alt="QR code opening the builder meetup connection form"
            width={1200}
            height={1200}
            priority
            className="h-auto w-full"
          />
        </div>
        <p className="mt-5 text-sm text-ink-2">Point your camera at the code</p>
        <p className="mt-2 break-all font-mono text-xs text-ink-2/70">cloudhacksrilanka.com/connect</p>
      </section>
    </main>
  );
}
