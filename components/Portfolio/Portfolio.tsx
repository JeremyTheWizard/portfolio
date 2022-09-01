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
        <ul className="space-y-md">
          <div className="space-y-xs">
            <h3>NFT PALACE</h3>
            <p className="">
              Marketplace that enables the creation, sale, and purchase of
              ERC721 tokens.
            </p>
          </div>
          {/* Double div used to prevent not desired behavior from browsers treating a touch event as a onclick event */}
          <div onClick={() =>
                window.open("https://github.com/Mijail-Piekarz/NFT-Marketplace")
              }>
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
        </ul>
      </section>
    </>
  );
};
