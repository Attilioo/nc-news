import '../styles/Error.css'

const Error = ({ message }) => {
  return (
    <section className="article-main error">
      <p>There was an error with your page: {message}</p>
    </section>
  );
};
export default Error;
