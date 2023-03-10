import { Link } from "react-router-dom";

const NotAvailable = () => {
  return (
    <section class="flex items-center h-full p-16 bg-white dark:text-gray-500">
      <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div class="max-w-md text-center">
          <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p class="mt-4 mb-8 dark:text-gray-500">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to={"/"}
            rel="noopener noreferrer"
            class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotAvailable;
