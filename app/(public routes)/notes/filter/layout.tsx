// app/notes/filter/layout.tsx

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section>
      <aside>{sidebar}</aside>
      <hr />
      <div>{children}</div>
    </section>
  );
};

export default NotesLayout;
  