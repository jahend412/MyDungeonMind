import Image from "/title.png";

export default function Home() {
  return (
    <div>
      <h1> Welcome to My Dungeon Mind</h1>
      <p>Please sign up or log in to get started!</p>
      <Image src={Image} alt="Title Image" />
    </div>
  );
}
