import Image from "next/image";
import React from "react";

export default function Partnership() {
  return (
    <section
      id="partnership"
      className="mb-5 mx-7 bg-accent1 rounded-lg shadow-md"
    >
      <div className="container">
        <div className="flex flex-wrap py-5 items-center">
          <div className="max-w-full">
            <h3 className="font-bold text-light text-base pr-10">
              Partnership with:
            </h3>
          </div>
          <div className="max-w-full">
            <nav id="partnership" className="block static">
              <ul className="flex flex-wrap w-full">
                <li className="">
                  <a
                    href="#logo1"
                    className="bg-light rounded-xl px-3 py-2 text-base text-dark mr-4 mt-2 flex md:mr-4"
                  >
                    <img src="/images/gojek.svg" alt="gojek" class="w-16" />
                  </a>
                </li>
                <li className="">
                  <a
                    href="#logo2"
                    className="bg-light rounded-xl px-3 py-2 text-base text-dark mr-4 md:mr-4 mt-2 flex"
                  >
                    <img
                      src="/images/bukalapak.svg"
                      alt="bukalapak"
                      class="w-16"
                    />
                  </a>
                </li>
                <li className="">
                  <a
                    href="#logo3"
                    className=" bg-light rounded-xl px-3 py-2 text-base text-dark mr-4 mt-2 flex md:mr-5"
                  >
                    <img
                      src="/images/tokopedia.svg"
                      alt="tokopedia"
                      class="w-16"
                    />
                  </a>
                </li>
                <li className="">
                  <a
                    href="#logo4"
                    className="bg-light rounded-xl px-3 py-2 text-base text-dark mr-4 md:mr-4 mt-2 flex"
                  >
                    <img src="/images/shopee.svg" alt="shopee" class="w-16" />
                  </a>
                </li>
                <li className="">
                  <a
                    href="#logo5"
                    className="bg-light rounded-xl px-3 py-2 text-base text-dark mr-4 mt-2 flex md:mr-5"
                  >
                    <img
                      src="/images/grab_font.svg"
                      alt="grab"
                      class="w-12 mx-2"
                    />
                  </a>
                </li>
                <li className="">
                  <a
                    href="#logo5"
                    className="bg-light rounded-xl px-3 py-2 text-base text-dark mt-2 flex"
                  >
                    <img src="/images/bca.svg" alt="bca" class="w-12 mx-2" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
