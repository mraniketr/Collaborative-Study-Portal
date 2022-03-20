import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default () => {
  return (
    <div>
      <a href="https://www.youtube.com/watch?v=5qap5aO4i9A">LoFi Music</a>
      <a href="https://www.youtube.com/watch?v=fEvM-OUbaKs">Jazz Music</a>
      <a href="https://www.youtube.com/watch?v=XULUBg_ZcAU">Piano Music</a>
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired();
