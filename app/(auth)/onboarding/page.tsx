import AccountProfile from '@/components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';

async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  // const userInfo = await fetchUser(user.id);
  // if (userInfo?.onboarded) redirect('/');

  const currentuser = await currentUser();
  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?.objectId,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user.firstName || '',
    bio: userInfo?.bio || '',
    image: userInfo?.image || user.imageUrl,
  };

  // const userData = {
  //   id: user?.id,
  //   objectId: '',
  //   username: user?.username || '',
  //   name: user.firstName || '',
  //   bio: '',
  //   image: user.imageUrl,
  // };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding page</h1>
      <p className="mt-3 text-base-regular  text-light-2">
        Complete your profile now to start using Threads!
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
