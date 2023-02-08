export const Footer = () => {
  return (
    <footer>
      <p>Copyright © 2023 Altersandr</p>
      <a href="https://github.com/Altersandr">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          width="30px"
          alt="Altersandr"
          id="github"
        />
      </a>
      <div>
        API{" "}
        <a
          href="https://www.themoviedb.org/"
          style={{ textDecoration: "none", color: "rgb(57, 62, 70)" }}
        >
          https://www.themoviedb.org/
        </a>
      </div>
    </footer>
  );
};
