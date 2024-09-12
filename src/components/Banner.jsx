import aluraLatam from "../../public/alura-latam.png";

function Banner() {
  return (
    <section className="flex flex-col items-center gap-5 p-5 pt-10 text-white sm:py-5 sm:flex-row banner">
      <div className="text-center sm:text-left">
        <h2 className="inline-block px-4 py-2 mb-4 text-xl text-white bg-blue-500 rounded sm:text-2xl">
          Front End
        </h2>
        <h3 className="mb-1 text-xl sm:text-2xl">Challenge React</h3>
        <p className="text-lg sm:text-xl">
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <div>
        <img src={aluraLatam} className="rounded" alt="banner img" />
      </div>
    </section>
  );
}

export default Banner;
