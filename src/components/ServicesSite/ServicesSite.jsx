const ServicesSite = () => {
  const services_data = [
    {
      title: "کاربردی و پروژه محور",
      icons: {
        svgData1: (
          <svg
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-full top-0 left-0 absolute z-1 "
          >
            <path
              d="M73.302 36.65c0 24.435-12.217 36.652-36.651 36.652C12.217 73.302 0 61.085 0 36.65 0 12.217 12.217 0 36.65 0c24.435 0 36.652 12.217 36.652 36.65Z"
              fill="url(#warranty-holder_svg__a)"
            ></path>
            <defs>
              <linearGradient
                id="warranty-holder_svg__a"
                x1="0.099"
                y1="0"
                x2="73.212"
                y2="73.413"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7EB5F9"></stop>
                <stop offset="1" stop-color="#6475FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        ),
        svgData2: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            class="h-9 w-9 z-10 text-white shadow-warranty-icon-mini md:shadow-warranty-icon"
          >
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M3.353 8.95A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m8 9.5 2.078 1.732a1 1 0 0 1 0 1.536L8 14.5"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M12.5 14.5H16"
            ></path>
          </svg>
        ),
      },
    },
    {
      title: "ویدئو های کوتاه و با کیفیت",
      icons: {
        svgData1: (
          <svg
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-full top-0 left-0 absolute z-1 "
          >
            <path
              d="M73.302 36.65c0 24.435-12.217 36.652-36.651 36.652C12.217 73.302 0 61.085 0 36.65 0 12.217 12.217 0 36.65 0c24.435 0 36.652 12.217 36.652 36.65Z"
              fill="url(#warranty-holder_svg__a)"
            ></path>
            <defs>
              <linearGradient
                id="warranty-holder_svg__a"
                x1="0.099"
                y1="0"
                x2="73.212"
                y2="73.413"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7EB5F9"></stop>
                <stop offset="1" stop-color="#6475FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        ),
        svgData2: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            class="h-9 w-9 z-10 text-white shadow-warranty-icon-mini md:shadow-warranty-icon"
          >
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M3.353 8.95A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m14.5 14.5-2.839-1.806V9"
            ></path>
          </svg>
        ),
      },
    },
    {
      title: "همراهی مربی",
      icons: {
        svgData1: (
          <svg
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-full top-0 left-0 absolute z-1 "
          >
            <path
              d="M73.302 36.65c0 24.435-12.217 36.652-36.651 36.652C12.217 73.302 0 61.085 0 36.65 0 12.217 12.217 0 36.65 0c24.435 0 36.652 12.217 36.652 36.65Z"
              fill="url(#warranty-holder_svg__a)"
            ></path>
            <defs>
              <linearGradient
                id="warranty-holder_svg__a"
                x1="0.099"
                y1="0"
                x2="73.212"
                y2="73.413"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7EB5F9"></stop>
                <stop offset="1" stop-color="#6475FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        ),
        svgData2: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            class="h-8 w-8 z-10 text-white shadow-warranty-icon-mini md:shadow-warranty-icon"
          >
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M3 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 0 1 5.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C17 20.154 16.181 21 15.172 21H4.828C3.818 21 3 20.154 3 19.111ZM14.083 6.938c0 2.174-1.828 3.937-4.083 3.937S5.917 9.112 5.917 6.937C5.917 4.764 7.745 3 10 3s4.083 1.763 4.083 3.938Z"
            ></path>
            <g clip-path="url(#coach_svg__a)">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.218 8.529a.843.843 0 0 1 1.564 0l.204.49c.12.29.383.49.688.524l.57.065c.718.081 1.015.984.49 1.492l-.483.467a.879.879 0 0 0-.249.801l.117.59c.148.748-.653 1.312-1.285.906l-.382-.245a.834.834 0 0 0-.904 0l-.382.245c-.632.406-1.433-.158-1.285-.905l.117-.59a.879.879 0 0 0-.249-.802l-.483-.467c-.524-.508-.228-1.41.49-1.492l.57-.065a.852.852 0 0 0 .688-.523l.204-.491Z"
              ></path>
            </g>
            <defs>
              <clipPath id="coach_svg__a">
                <path fill="#fff" d="M15 7h8v8h-8z"></path>
              </clipPath>
            </defs>
          </svg>
        ),
      },
    },
    {
      title: "تضمین کیفیت",
      icons: {
        svgData1: (
          <svg
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-full top-0 left-0 absolute z-1 "
          >
            <path
              d="M73.302 36.65c0 24.435-12.217 36.652-36.651 36.652C12.217 73.302 0 61.085 0 36.65 0 12.217 12.217 0 36.65 0c24.435 0 36.652 12.217 36.652 36.65Z"
              fill="url(#warranty-holder_svg__a)"
            ></path>
            <defs>
              <linearGradient
                id="warranty-holder_svg__a"
                x1="0.099"
                y1="0"
                x2="73.212"
                y2="73.413"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7EB5F9"></stop>
                <stop offset="1" stop-color="#6475FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        ),
        svgData2: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            class="h-9 w-9 z-10 text-white shadow-warranty-icon-mini md:shadow-warranty-icon"
          >
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="m15.875 19.487.18-.124c.566-.391.849-.587 1.101-.796a7.495 7.495 0 0 0 2.603-4.476c.056-.323.086-.664.144-1.346l.03-.353A17.996 17.996 0 0 0 19.906 9l-.036-.349a5.75 5.75 0 0 0-3.205-4.574 10.642 10.642 0 0 0-9.328 0A5.75 5.75 0 0 0 4.13 8.65L4.094 9a17.993 17.993 0 0 0-.029 3.391l.03.353c.06.682.089 1.023.145 1.346a7.495 7.495 0 0 0 2.603 4.476c.253.21.535.405 1.1.796l.18.124c.769.532 1.153.797 1.538.982a5.41 5.41 0 0 0 4.676 0c.385-.185.77-.45 1.537-.982Z"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m9.25 11.75 2 2 3.5-3.75"
            ></path>
          </svg>
        ),
      },
    },
    {
      title: "تضمین بازگشت وجه",
      icons: {
        svgData1: (
          <svg
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-full top-0 left-0 absolute z-1 "
          >
            <path
              d="M73.302 36.65c0 24.435-12.217 36.652-36.651 36.652C12.217 73.302 0 61.085 0 36.65 0 12.217 12.217 0 36.65 0c24.435 0 36.652 12.217 36.652 36.65Z"
              fill="url(#warranty-holder_svg__a)"
            ></path>
            <defs>
              <linearGradient
                id="warranty-holder_svg__a"
                x1="0.099"
                y1="0"
                x2="73.212"
                y2="73.413"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7EB5F9"></stop>
                <stop offset="1" stop-color="#6475FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        ),
        svgData2: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            class="h-9 w-9 z-10 text-white shadow-warranty-icon-mini md:shadow-warranty-icon"
          >
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M2.885 8.849a7.353 7.353 0 0 1 5.546-5.407l.453-.101a14.401 14.401 0 0 1 6.232 0l.453.1a7.353 7.353 0 0 1 5.546 5.408 13.07 13.07 0 0 1 0 6.302 7.353 7.353 0 0 1-5.546 5.407l-.453.101a14.402 14.402 0 0 1-6.232 0l-.453-.1a7.353 7.353 0 0 1-5.546-5.408 13.077 13.077 0 0 1 0-6.302Z"
            ></path>
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M12 7c.383 0 .693.292.693.652v.534h.076C14.057 8.186 15 9.24 15 10.419c0 .36-.31.652-.692.652-.383 0-.693-.292-.693-.652 0-.568-.434-.929-.846-.929h-.076v2.053l.934.32a2.03 2.03 0 0 1-.66 3.95h-.274v.535c0 .36-.31.652-.693.652-.382 0-.692-.292-.692-.652v-.534h-.077C9.943 15.814 9 14.76 9 13.581c0-.36.31-.652.692-.652.383 0 .693.292.693.652 0 .568.434.929.846.929h.077v-2.053l-.935-.32a2.03 2.03 0 0 1 .66-3.95h.275V7.65c0-.36.31-.652.692-.652Zm-.692 2.49h-.275c-.302 0-.648.27-.648.726 0 .349.215.61.46.695l.463.158V9.49Zm1.385 3.441v1.579h.274c.302 0 .648-.27.648-.726a.724.724 0 0 0-.46-.695l-.462-.158Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        ),
      },
    },
  ];
  return (
    <>
      {services_data.map((service, i) => {
        return (
          <div
            key={i}
            className="w-1/2 md:w-1/4 lg:w-1/5 flex justifu-center hover:scale-105 cursor-pointer flex-col py-8 items-center trsition-all duration-200 rounded-2xl hover:bg-white hover:shadow-gray-300/50 hover:shadow-lg"
          >
            <div className="relative p-5 flex items-center justify-center mb-6">
              {service.icons.svgData1}
              {service.icons.svgData2}
            </div>
            <p className="flex-1 font-bold text-xs sm:text-sm text-center">
              {service.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default ServicesSite;
