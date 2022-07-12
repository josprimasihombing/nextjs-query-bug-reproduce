export default function Home() {
  return (
    <h1>Plus character (+) from query is replaced by space character</h1>
  )
}

export const getServerSideProps = async ({ req, res, query }) => {
  // Full url: http://localhost:3000/?email=foo+bar@bar.com

  console.log(query.email); // foo bar@bar.com <<<<< query email

  // Expected value: foo+bar@bar.com <<<<< query email

  return {
    props: {},
  };
};
