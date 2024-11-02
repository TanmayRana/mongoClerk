"use client";

import { SignOutButton, UserButton, UserProfile, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <h1>{user?.fullName}</h1>
      <p>{user?.emailAddresses[0].emailAddress}</p>
      <UserButton
        appearance={{
          elements: {
            userButtonAvatarBox: "h-[80px] w-[80px]",
          },
        }}
      />
      <button className="bg-blue-800 px-8 py-3 ml-4 mt-2">
        <SignOutButton />
      </button>
    </>
  );
}
// api/webhooks/clerk
