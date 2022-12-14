import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <section class="flex items-center h-screen p-16 bg-primaryColor dark:text-gray-100">
      <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div class="max-w-md text-center">
          <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl mb-8 font-semibold md:text-3xl">
            Desculpe, nós não encontramos essa página.
          </p>

          <a
            rel="noopener noreferrer"
            href="/"
            class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-white"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  );
}
