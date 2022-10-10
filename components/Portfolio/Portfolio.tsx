import Image from "next/image";

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
              <h3>AVOBANKLESS</h3>
              <p className="">
                Reinventing the way crypto loans work. Develop a good credit
                score ang get access to loans with lower interest rates and less
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
              <h3>NFT PALACE</h3>
              <p className="">
                Marketplace that enables the creation, sale, and purchase of
                ERC721 tokens.
              </p>
            </div>
            {/* Double div used to prevent not desired behavior from browsers treating a touch event as a onclick event */}
            <div
              onClick={() =>
                window.open(
                  "https://github.com/Mijail-Piekarz/NFT-Marketplace",
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
