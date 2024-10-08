import React, { useState } from "react";
import arLogo from "../images/ar-logo_optimized.webp";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Arabian() {
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex w-full justify-center items-center">
      {/* MODAL / NAJAVAq */}
      {/* <div className="z-50">
        <div className="relative">
          {showModal && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-20 overflow-y-auto">
              <div className="hover:bg-white bg-gray-900 border border-white p-8 rounded-lg lg:w-1/2 w-full sm:max-w-lg px-6 text-white hover:bg-green hover:text-black transition-all ease-linear duration-300">
                <h2 className="mt-32 text-3xl md:text-4xl font-bold my-4 text-center pb-8 max-[350px]:pt-32">
                  DUBX NFT MARKETPLACE
                </h2>

                <p className="text-center text-lg font-semibold underline">
                  <span className="font-bold text-3xl">
                    {" "}
                    Beta Testing Phase!
                  </span>{" "}
                </p>
                <a href="https://nft.arabianchain.org">
                  <p className="text-center font-semibold py-2 cursor-pointer transition-all easy-in-out duration-500 hover:text-[#1bf8ec] text-[#e32970]">
                    nft.arabianchain.org
                  </p>
                </a>
                <a href="https://nft.arabianchain.org">
                  <p className="text-center font-semibold py-1 cursor-pointer transition-all easy-in-out duration-500 hover:text-[#e32970]">
                    TEST WITH US
                  </p>
                </a>
                <p className="px-8 pt-3">Dear valued users,</p>
                <p className="px-8 pt-3">
                  We're thrilled to share that our highly anticipated DUBX NFT
                  Marketplace is now in the beta testing phase! As we fine-tune
                  and optimize the platform for optimal performance and user
                  experience, we invite you to join us in this exciting journey.
                </p>

                <p className="px-8 pt-3">
                  Stay tuned for updates as we work diligently to finalize the
                  platform and bring it to you online very soon. Your continued
                  support and participation are invaluable to us as we strive to
                  deliver the best NFT experience possible with DUBX.
                </p>

                <p className="px-8 pt-3">
                  Thank you for being part of the DUBX community. Together,
                  let's redefine the future of digital art and collectibles.
                </p>

                <p className="text-center mt-6 font-semibold text-base">
                  Warm regards, <br />
                  DUBX Team
                </p>
                <div className="flex justify-center mt-8">
                  <button
                    className="px-4 py-2 bg-[#1bf8ec] text-white hover:bg-[#e32970] text-lg font-semibold border border-transparent rounded-md transition duration-300 ease-in-out"
                    onClick={closeModal}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
            // <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-20 overflow-y-auto">
            //   <div className="gradient-bg-welcome border border-[#fff] p-8 rounded-lg lg:w-1/2 px-16 text-white">
            //     <h2 className="mt-16 text-4xl font-bold my-4 text-center pb-12">
            //       NFT MARKETPLACE
            //     </h2>
            //     <p className="text-center text-xl font-semibold underline">
            //       📢 Important Announcement: New DUBX NFT Marketplace Coming
            //       Soon! 🚀
            //     </p>
            //     <p className="text-center mt-6">Dear users,</p>
            //     <p className="text-center mt-6">
            //       We are excited to announce that our highly anticipated DUBX
            //       NFT Marketplace will soon be launching, offering a wide range
            //       of unique digital collections and artworks.
            //     </p>
            //     <p className="text-center mt-6">
            //       Join our community and stay tuned for updates as we prepare to
            //       launch our Marketplace. Visit us soon and start your NFT
            //       journey with DUBX!
            //     </p>
            //     <p className="text-center mt-6">
            //       Additionally, we're thrilled to share that we are also
            //       preparing another <strong>groundbreaking application</strong>{" "}
            //       that will elevate standards and revolutionize the industry.
            //       Stay tuned for more details on this exciting new project!
            //     </p>
            //     <p className="text-center mt-6 font-semibold text-lg">
            //       Warm regards, <br />
            //       DUBX Team
            //     </p>
            //     <div className="flex w-full justify-end pt-16">
            //       <button
            //         className="px-4 py-2 bg-transparent w-full text-white hover:bg-white text-xl border rounded-md hover:text-black hover:border-cyan-400 transition-all duration-300 ease-in hover:font-semibold"
            //         onClick={closeModal}
            //       >
            //         CLOSE
            //       </button>
            //     </div>
            //   </div>
            // </div>
          )}
        </div>
      </div> */}
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 mt-20">
        <div className="flex-1 flex flex-col justify-start items-center w-[70%]">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            decoding="async"
            alt="Arabianchain Logo"
            src={arLogo}
          />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start pl-[30px]">
          <h1
            className="text-3xl sm:text-5xl py-2 font-bold text-left"
            style={{ fontWeight: "700!important" }}
          >
            About
            <br />
            ArabianChain Technologies
          </h1>
          <h3 className="text-white text-2xl sm:text-3xl my-4">
            It is the first public, decentralized and consensus-driven
            blockchain in the MENA region
          </h3>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Arabianchain Technologies is a Bahrain based venture that is
            unlocking the potential of tomorrow’s economy by enabling today’s
            blockchain innovation.
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            It allows for self-executing and globally accessible smart contracts
            and decentralized Apps to be developed, and for digital tokens to be
            transacted, tracked and safeguarded over a network of thousands of
            connected yet distributed devices.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.arabianchain.wallet&hl=bs&gl=US"
            type="submit"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-[#1af9ec] underline">
              Download mobile wallet <span>HERE</span>
            </p>
          </a>
          <div className="flex justify-center items-center">
            <a
              href="https://arabianchain.org/whitepaper.pdf"
              type="submit"
              target="_blank"
              rel="noreferrer"
              className="my-12 bg-[#1BF8EC] px-7 py-2 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#4a2084] font-bold"
            >
              whitepaper
            </a>
            <a
              href="https://nft.arabianchain.org/"
              type="submit"
              target="_blank"
              className="border rounded-md px-3 mx-4 py-2 cursor-pointer bg-[#ba58e9] hover:border-[#ba58e9] hover:shadow-xl text-white transition-all ease-in duration-300 text-center text-lg 2xl:text-xl my-1 font-bold flex items-center justify-center"
            >
              Go to NFT Marketplace
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arabian;
