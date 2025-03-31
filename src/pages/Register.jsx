import RegistrationForm from "../components/ui/RegisterForm";

export default function RegistrationPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="w-full max-w-sm">
        <h1 className="text-primary text-lg sm:text-xl font-bold mb-6 text-center">
          Înregistrare
        </h1>
        <RegistrationForm />
      </div>
    </section>
  );
}
