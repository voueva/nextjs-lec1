import { redirect } from "next/navigation";

export default function About() {
  redirect('/profile');
    return (
      <div>
        <h2>About</h2>
      </div>
    );
}
  