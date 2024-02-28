export default function ProjectCard({ projectData }) {
  return (
    <div className="rounded-lg shadow-md w-100 py-2 px-2 lg:flex lg:space-x-4 md:hover:shadow-2xl ease-in-out duration-100">
      <div className="grid place-items-center h-48 mt-2 mb-2 mx-2 px-2 rounded-lg border-solid border-2 border-black overflow-hidden lg:w-1/2">
        <img
          src={projectData.image}
          alt={projectData.name + " screenshot."}
          className="block h-100 size-fit"
        />
      </div>
      <div className="flex flex-col items-center text-balance text-center lg:mt-2">
        <section>
          <h3 className="font-bold text-lg pb-2">{projectData.title}</h3>
        </section>
        <section className="mx-2 mb-2">
          <p className="mb-4 md:mb-8">{projectData.description}</p>
          <div className="lg:px-4">
            <span className="font-semibold">Stack: </span>
            <ul className="grid grid-cols-5 place-items-center space-x-4">
              {projectData.techs.map((tech) => (
                <li className="w-8 overflow-hidden">
                  <span>
                    <img src={tech.image} alt={tech.name + " Logo"} />
                  </span>
                  <span className="sr-only">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
