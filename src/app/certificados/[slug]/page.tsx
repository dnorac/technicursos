import {
  Body,
  Chapters,
  Container,
  UserNameForm,
} from "@/components/certificate-view";
import { loadChapters } from "@/services/courses";
import { Page } from "@/types";
import { currentUser } from "@clerk/nextjs/server";
import { getConclusionDate } from "./functions";

export default async function CertificatePage({
  params,
}: Page<{
  slug: string;
}>) {
  const { slug } = await params;

  const { chapters, metadata } = await loadChapters(slug);
  const user = await currentUser();

  if (!user?.firstName || !user?.lastName) {
    return <UserNameForm />;
  }

  const username = `${user.firstName} ${user.lastName}`;
  const conclusion = getConclusionDate();

  return (
    <Container>
      <Body name={username} title={metadata.title} conclusion={conclusion} />
      <Chapters chapters={chapters} />
    </Container>
  );
}
