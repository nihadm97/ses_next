"use client";

export default function ManagedPostsLoading() {
  return (
    <section
      className="flex min-h-[60vh] w-full items-center justify-center bg-white px-4 py-16"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="text-center text-blueGray-700">
        <div
          className="mx-auto mb-5 h-14 w-14 animate-spin rounded-full border-4 border-blueGray-200"
          style={{ borderTopColor: "#0284c7" }}
          aria-hidden="true"
        ></div>
        <p className="text-lg font-semibold">Učitavanje objava...</p>
        <p className="mt-2 text-sm text-blueGray-500">Molimo sačekajte.</p>
      </div>
    </section>
  );
}
