import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#D3EBF4] shadow-small dark:bg-black mt-12">
      <div className="mx-auto max-w-7xl px-6 py-10 2xl:px-0">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-0">
          <footer>
            <Link href="/" className="flex">
              {/* <Image
                src={}
                alt="Keep React"
                width="130"
                height="53"
                className="block dark:hidden"
              /> */}
              <h3 className="text-3xl font-semibold">Teeth Wizard</h3>
              {/* <Image
                src={KeepDarkLogo}
                alt="Keep React"
                width="130"
                height="53"
                className="hidden dark:block"
              /> */}
            </Link>
            <p className="mt-6 max-w-lg text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Keep React is an open-source component library built on Tailwind
              CSS and React.js. It provides a versatile set of pre-designed UI
              components to build modern web applications.
            </p>
          </footer>
          <footer>
            <h4 className="mb-3 text-body-3 font-medium text-metal-900 dark:text-white">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-body-3 font-normal text-metal-600 dark:text-metal-300">
              <li>Brand Center</li>
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </footer>
          <footer>
            <h4 className="mb-3 text-body-3 font-medium text-metal-900 dark:text-white">
              Resource
            </h4>
            <ul className="flex flex-col gap-3 text-body-3 font-normal text-metal-600 dark:text-metal-300">
              <li> GitHub</li>
              <li>Tailwind CSS</li>
              <li>React JS</li>
              <li>Figma</li>
            </ul>
          </footer>
        </div>
      </div>
      <div className="border-t border-t-metal-100 py-5 text-center dark:border-t-metal-600">
        <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
          &copy;{new Date().getFullYear()} All Rights Reserved by &nbsp;
          <Link href="/" target="_blank" className="font-medium">
            Teeth Wizard
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
