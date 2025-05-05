"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function setUserName(formData: FormData) {
  const userDetails = {
    firstName: formData.get("firstName")?.toString(),
    lastName: formData.get("lastName")?.toString(),
  };

  const { userId } = await auth();
  if (!userId) return;

  const client = await clerkClient();
  await client.users.updateUser(userId, userDetails);
}
