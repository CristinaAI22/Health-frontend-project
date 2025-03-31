import LoginForm from "../components/ui/LoginForm";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <h1 className="text-primary text-xl font-bold mb-4">Autentificare</h1>
      <LoginForm />
    </section>
  );
}
