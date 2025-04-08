import LoginForm from "../components/ui/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 pt-8 sm:px-6 lg:px-8">
      <h1 className="text-primary text-lg sm:text-xl font-bold mb-6 text-center">
        Autentificare
      </h1>
      <LoginForm />
    </div>
  );
}
