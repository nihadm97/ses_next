import AdminDashboard from "@/components/Admin/AdminDashboard";

export const metadata = {
  title: "Administracija | JU Srednja ekonomska škola Sarajevo",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminDashboard />;
}
