import Image from "next/image";

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="mb-lg text-center">About</h2>
      <div className="grid [@media(min-width:939px)]:grid-cols-2 gap-md">
        <div className="relative md:mx-auto">
          <Image
            src="/About.png"
            alt="Jeremy Piekarz"
            width={650}
            height={616}
            className="object-contain hidden 2xl:block"
          />
        </div>
        <div>
          <p>
            Hi there!
            <br />
            <br /> I'm Jeremy Piekarz, a professional developer. Expert in
            blockchain and web3.
            <br />
            <br />I focus on creating exceptional digital experiences by
            building{" "}
            <span className="font-bold">
              intuitive, unique and attractive products.
            </span>
            <br />
            <br />
            I'm fast and efficient. So, if you have a project that needs to be
            done right, you've come to the correct place.
          </p>

          <div className="hidden mt-lg xl:flex xl:flex-wrap gap-lg justify-between">
            <div>
              <h3 className="mb-sm">Blockchain</h3>
              <ul className="space-y-sm">
                <li>Solidity</li> <li>Hardhat</li> <li>Brownie</li>
                <li>Ganache</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-sm">Frontend</h3>
              <ul className="space-y-sm">
                <li>React</li>
                <li>Next js</li>
                <li>JavaScript</li>
                <li>Typescript</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-sm">Backend</h3>
              <ul className="space-y-sm">
                <li>Python</li>
                <li>Node</li>
                <li>Mongodb</li>
                <li>Mysql</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:hidden mt-lg grid grid-cols-2 sm:grid-cols-4 gap-lg">
        <div>
          <h3 className="mb-sm">Blockchain</h3>
          <ul className="space-y-sm">
            <li>Solidity</li> <li>Hardhat</li> <li>Brownie</li>
            <li>Ganache</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-sm">Frontend</h3>
          <ul className="space-y-sm">
            <li>React</li>
            <li>Next js</li>
            <li>JavaScript</li>
            <li>Typescript</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-sm">Backend</h3>
          <ul className="space-y-sm">
            <li>Python</li>
            <li>Node</li>
            <li>Mongodb</li>
            <li>Mysql</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-sm">Design</h3>
          <ul className="space-y-sm">
            <li>Figma</li>
            <li>Photoshop (less)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
