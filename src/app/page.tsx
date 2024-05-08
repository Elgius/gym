"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-24">
        <h1>Welcome to the gym app!</h1>
        <p>Shit about to get real hard now</p>

        <p>Log in to continue</p>

        <div className="flex flex-col gap-5">
          <>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Login</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    This feature is temporarily down
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    this feature is not up yet cuz i got busy, but it will get
                    done....soon....i hope
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Go back</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>

          <>
            <Link href="/workout">
              <Button>Workouts</Button>
            </Link>
          </>
        </div>
      </main>
    </>
  );
}
