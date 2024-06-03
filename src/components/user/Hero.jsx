import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="mt-24 mb-10 mx-7">
      <div className="relative">
        <div className="flex flex-wrap">
          <div className="w-full px-4 py-5 lg:w-1/2 mb-5 lg:my-10">
            <div className="max-w-xl mx-auto">
              <h4 className="font-extrabold text-3xl text-primary mb-2 max-w-xl">
                Find <span className="text-white"> Freelancing </span> Jobs that
                you’ll <span className="text-white"> actualy </span> love.
              </h4>
              <h3 className="text-sm text-secondary ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                eum tempora similique consequatur. Odit praesentium provident
                quidem eligendi, aut dolore ipsam ex aperiam error, enim, sed
                corrupti unde impedit ab pariatur. Praesentium harum totam nobis
                adipisci officiis sequi exercitationem mollitia sunt id,
                veritatis dolores corporis, magni laborum assumenda quod ea.
              </h3>
              <div className="flex flex-wrap mt-8">
                <p className="font-semibold text-accent text-sm mr-8 mt-2">
                  Follow Us
                </p>
                {/* Twitter  */}
                <a
                  href=""
                  target="_blank"
                  className="bg-white text-primary w-9 h-9 mr-3 rounded-full flex justify-center
                                items-center border border-slate-300 hover:border-primary hover:bg-primary
                                hover:text-white"
                >
                  <svg
                    className="fill-current"
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>X</title>
                    <path
                      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 
                                    1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href=""
                  target="_blank"
                  className="bg-white text-primary w-9 h-9 mr-3 rounded-full flex justify-center
                                items-center border border-slate-300 hover:border-primary hover:bg-primary
                                hover:text-white"
                >
                  <svg
                    className="fill-current"
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path
                      d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075
                                    1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 
                                    3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 
                                    2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 
                                    4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 
                                    1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 
                                    1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 
                                    7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 
                                    4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 
                                    1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 
                                    4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 
                                    1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 
                                    5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 
                                    6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 
                                    6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                    />
                  </svg>
                </a>

                {/* Linkedin */}
                <a
                  href=""
                  target="_blank"
                  className="bg-white text-primary w-9 h-9 mr-3 rounded-full flex justify-center
                                items-center border border-slate-300 hover:border-primary hover:bg-primary
                                hover:text-white"
                >
                  <svg
                    className="fill-current"
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
                                    1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 
                                    2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 
                                    0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>

                {/* Youtube */}
                <a
                  href=""
                  target="_blank"
                  className="bg-white text-primary w-9 h-9 mr-3 rounded-full flex justify-center
                                items-center border border-slate-300 hover:border-primary hover:bg-primary
                                hover:text-white"
                >
                  <svg
                    className="fill-current"
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 
                                    3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 
                                    9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 
                                    15.568V8.432L15.818 12l-6.273 3.568z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative max-w-full lg:right-0">
              <img
                src="/images/home_image.png"
                alt="intro_image"
                className="max-w-full mx-auto"
              />
              <div className="absolute top-7 -z-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent rounded-full opacity-50 filter blur-3xl lg:size-11/12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
