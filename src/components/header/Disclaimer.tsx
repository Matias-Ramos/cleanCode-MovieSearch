const containerStyle = "inline-block w-fit mx-auto px-3 bg-gray-300 font-bold text-center";
const repoLink = "https://github.com/Matias-Ramos/cleanCode-MovieSearch";
const linkStyle = "underline text-blue-600 hover:text-blue-800";

const Disclaimer = () => (
    <div className={containerStyle}>
      Target audience: Designed for developers. <br />
      This project's focus is set on <u>code quality</u>, not UI & design. Check out the{' '}
      <a href={repoLink} target="_blank" rel="noopener noreferrer" className={linkStyle}>
        repository
      </a>
    </div>
  );
  
  export default Disclaimer;