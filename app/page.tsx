import { EmptyState } from "./components/empty-state";
import { NotFound } from "./components/not-found";
import { Profile } from "./components/profile";
import { getGithubProfile } from "./lib/get-github-profile";

export const revalidate = 3600;

const yourGithubUsername = "jkotake";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const profileData = await getGithubProfile(yourGithubUsername);

  if (!profileData) {
    return <EmptyState />;
  }

  if (profileData === "not-found") {
    return <NotFound username={yourGithubUsername} />;
  }

  return <Profile username={yourGithubUsername} geo={searchParams} />;
}
