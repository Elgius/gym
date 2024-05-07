import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-24">
        <h1>Welcome to the gym app!</h1>
        <p>Shit about to get real hard now</p>

        <p>Log in to continue</p>

        <div>
          <Button>Login</Button>
        </div>
      </main>
    </>
  );
}
