import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

type Props = {
  projectEnter: () => void;
  projectLeave: () => void;
};

export const Portfolio: React.FC<Props> = ({ projectEnter, projectLeave }) => {
  return (
    <>
      <section id="portfolio" className="scroll-mt-24">
        <h2 className="mb-lg text-center">Featured Projects</h2>
        <ul className="space-y-lg">
          <li>
            <div className="space-y-xs mb-md">
              <div className="flex gap-4 items-center">
                <h3>AVOBANKLESS</h3>
                <BsBoxArrowUpRight
                  onClick={() =>
                    window.open("https://avobankless.vercel.app", "_blank")
                  }
                  style={{ cursor: "pointer" }}
                />
                <AiFillGithub
                  onClick={() =>
                    window.open(
                      "https://github.com/avobankless/avobankless",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
              <p className="">
                Reinventing the way crypto loans work. Develop a good credit
                score and get access to loans with lower interest rates and less
                collateral.
              </p>
            </div>
            <div
              onClick={() =>
                window.open("https://avobankless.vercel.app", "_blank")
              }
            >
              <div
                className="grid lg:grid-cols-2 relative justify-center gap-3 pointer-events-none lg:pointer-events-auto"
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
              >
                <Image
                  src="/avobankless-landing-page.png"
                  alt="avobankless landing page"
                  width="768px"
                  height="568px"
                  className="cursor-none"
                />
                <Image
                  src="/avobankless-credit-score-page.png"
                  alt="avobankless credit score page"
                  width="768px"
                  height="568px"
                />
                <Image
                  src="/avobankless-borrow-page.png"
                  alt="avobankless landing page"
                  width="768px"
                  height="568px"
                  className="cursor-none"
                />
                <Image
                  src="/avobankless-winners.png"
                  alt="avobankless credit score page"
                  width="768px"
                  height="568px"
                />
                <img />
                <div></div>
              </div>
            </div>
          </li>
          <li>
            <div className="space-y-xs mb-md">
              <div className="flex gap-4 items-center">
                <h3>PEACE</h3>
                <BsBoxArrowUpRight
                  onClick={() => window.open("https://yourpeace.io", "_blank")}
                  style={{ cursor: "pointer" }}
                />
                <AiFillGithub
                  onClick={() =>
                    window.open(
                      "https://github.com/peace-cryptolegacy/frontend",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
              <p>
                Safeguard your crypto investments and assets with Peace's
                game-changing solutions: testaments, backup wallets, emergency
                migration plans, and more!
              </p>
            </div>
            <div onClick={() => window.open("https://yourpeace.io", "_blank")}>
              <div
                className="grid lg:grid-cols-2 relative justify-center gap-3 pointer-events-none lg:pointer-events-auto"
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
              >
                <Image
                  src="/peace-landing-page-dark-blue.png"
                  alt="peace landing page"
                  width="768px"
                  height="568px"
                  className="cursor-none"
                />
                <Image
                  src="/peace-select-protection-plan.png"
                  alt="peace manage testament page"
                  width="768px"
                  height="568px"
                />
                <Image
                  src="/peace-recovery-page.png"
                  alt="peace landing page"
                  width="768px"
                  height="568px"
                />

                <Image
                  src="/peace-featured-on-gradient-bg.png"
                  alt="peace landing page"
                  width="768px"
                  height="568px"
                />
                <img />
                <div></div>
              </div>
            </div>
          </li>

          <li>
            <div className="space-y-xs mb-md">
              <div className="flex gap-4 items-center">
                <h3>NFT PALACE</h3>
                <AiFillGithub
                  onClick={() =>
                    window.open(
                      "https://github.com/JeremyTheWizard/NFT-Marketplace",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
              <p className="">
                Marketplace that enables the creation, sale, and purchase of
                ERC721 tokens.
              </p>
            </div>
            {/* Double div used to prevent not desired behavior from browsers treating a touch event as a onclick event */}
            <div
              onClick={() =>
                window.open(
                  "https://github.com/JeremyTheWizard/NFT-Marketplace",
                  "_blank"
                )
              }
            >
              <div
                className="grid lg:grid-cols-2 relative justify-center gap-3 pointer-events-none lg:pointer-events-auto"
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
              >
                <Image
                  src="/NFTMarketplace-marketplace-page.png"
                  alt="marketplace"
                  width="768px"
                  height="568px"
                  className="cursor-none"
                />
                <Image
                  src="/NFTMarketplace-create-page.png"
                  alt="marketplace"
                  width="768px"
                  height="568px"
                />
                <Image
                  src="/NFTMarketplace-collection-page.png"
                  alt="marketplace"
                  width="768px"
                  height="568px"
                />
                <Image
                  src="/NFTMarketplace-asset-page.png"
                  alt="marketplace"
                  width="768px"
                  height="568px"
                />
                <img />
                <div></div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};
