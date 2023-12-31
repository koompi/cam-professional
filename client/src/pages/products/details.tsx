import { Component, createEffect, createResource, For } from "solid-js";
import { A, useParams } from "@solidjs/router";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "@solidjs/router";
import Image from "../../components/Image";
import Cards from "../../components/cards/Cards";
import CoreProducts from "../../data/Core-Product";

type Product = {
  id: string;
  name: string;
  image: string;
  rating: number;
  category: string;
  brand: string;
  price: number;
  quantity: number;
};

const fetchProduct = async (id: string) => {
  const res = await fetch(`https://cptdb.koompi.com/CoreProducts/` + id);
  return res.json();
};
const ProductDetail: Component<{}> = (props) => {
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCartContext();
  const params = useParams<{ id: string }>();
  const [item] = createResource(params.id, fetchProduct);
  const handleAddTocart = (product: Product) => {
    addToCart(product);
  };
  const isInCart = () => {
    const data = cartItems.some((item) => item?.product?.id === params.id);
    return data;
  };
  createEffect(() => {
    isInCart();
  });

  return (
    <>
      <div class="px-0 md:px-16">
        <div class="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div class="flex items-center">
                  <A href="#" class="mr-2 text-sm font-medium text-gray-900">
                    Accessories
                  </A>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <A href="#" class="mr-2 text-sm font-medium text-gray-900">
                    Printer
                  </A>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li class="text-sm">
                <A
                  href="#"
                  aria-current="page"
                  class="font-medium text-gray-500 hover:text-gray-600"
                >
                  Ribbon
                </A>
              </li>
            </ol>
          </nav>

          <div class="block md:hidden relative -z-10 px-4 pt-4">
            <div id="default-carousel" class="w-full" data-carousel="slide">
              <div class="relative h-[180px] overflow-hidden rounded-lg">
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="/thumbnails/thumbnail-1.png"
                    alt=""
                    class="w-full object-contain"
                  />
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="/thumbnails/thumbnail-2.png"
                    alt=""
                    class="w-full object-contain"
                  />
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="/thumbnails/thumbnail-3.png"
                    alt=""
                    class="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="hidden md:block mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-4 lg:px-8">
            <Image
              image="/products/product1.png"
              name="undefined"
              width="undefined"
              heigh="undefined"
              is_scale={true}
            />
            <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
              <Image
                image="/products/product1.png"
                name="undefined"
                width="undefined"
                heigh="undefined"
                is_scale={true}
              />
              <Image
                image="/products/product1.png"
                name="undefined"
                width="undefined"
                heigh="undefined"
                is_scale={true}
              />
            </div>
            <Image
              image="/products/product1.png"
              name="undefined"
              width="undefined"
              heigh="undefined"
              is_scale={true}
            />
          </div>

          <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                BADGY 200 Black Ribbon Monochrome
              </h1>
            </div>

            <div class="mt-4 lg:row-span-3 lg:mt-0">
              <h2 class="sr-only">Product information</h2>
              <p class="text-5xl tracking-tight text-danger font-semibold">
                $192
              </p>

              {/* -----review -------- */}

              <div class="mt-6">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-200 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="sr-only">4 out of 5 stars</p>
                  <A href="#" class="ml-3 text-sm font-medium text-primary">
                    117 reviews
                  </A>
                </div>
              </div>

              <form class="mt-10">
                <div>
                  {/* <h3 class="text-sm font-medium text-gray-900">Color</h3> */}

                  {/* <fieldset class="mt-4">
                  <legend class="sr-only">Choose a color</legend>
                  <div class="flex items-center space-x-3">
                    <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                      <input
                        type="radio"
                        name="color-choice"
                        value="White"
                        class="sr-only"
                        aria-labelledby="color-choice-0-label"
                      />
                      <span id="color-choice-0-label" class="sr-only">
                        White
                      </span>
                      <span
                        aria-hidden="true"
                        class="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"
                      ></span>
                    </label>

                    <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                      <input
                        type="radio"
                        name="color-choice"
                        value="Gray"
                        class="sr-only"
                        aria-labelledby="color-choice-1-label"
                      />
                      <span id="color-choice-1-label" class="sr-only">
                        Gray
                      </span>
                      <span
                        aria-hidden="true"
                        class="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"
                      ></span>
                    </label>

                    <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                      <input
                        type="radio"
                        name="color-choice"
                        value="Black"
                        class="sr-only"
                        aria-labelledby="color-choice-2-label"
                      />
                      <span id="color-choice-2-label" class="sr-only">
                        Black
                      </span>
                      <span
                        aria-hidden="true"
                        class="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"
                      ></span>
                    </label>
                  </div>
                </fieldset> */}
                </div>

                {/* <div class="mt-10">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium text-gray-900">Size</h3>
                  <A
                    href="#"
                    class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </A>
                </div>

                <fieldset class="mt-4">
                  <legend class="sr-only">Choose a size</legend>
                  <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200">
                      <input
                        type="radio"
                        name="size-choice"
                        value="XXS"
                        disabled
                        class="sr-only"
                        aria-labelledby="size-choice-0-label"
                      />
                      <span id="size-choice-0-label">XXS</span>
                      <span
                        aria-hidden="true"
                        class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                      >
                        <svg
                          class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line
                            x1="0"
                            y1="100"
                            x2="100"
                            y2="0"
                            vector-effect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </label>
                    <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                      <input
                        type="radio"
                        name="size-choice"
                        value="XS"
                        class="sr-only"
                        aria-labelledby="size-choice-1-label"
                      />
                      <span id="size-choice-1-label">XS</span>

                      <span
                        class="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                      <input
                        type="radio"
                        name="size-choice"
                        value="S"
                        class="sr-only"
                        aria-labelledby="size-choice-2-label"
                      />
                      <span id="size-choice-2-label">S</span>

                      <span
                        class="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                      <input
                        type="radio"
                        name="size-choice"
                        value="M"
                        class="sr-only"
                        aria-labelledby="size-choice-3-label"
                      />
                      <span id="size-choice-3-label">M</span>

                      <span
                        class="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                      <input
                        type="radio"
                        name="size-choice"
                        value="L"
                        class="sr-only"
                        aria-labelledby="size-choice-4-label"
                      />
                      <span id="size-choice-4-label">L</span>

                      <span
                        class="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                      <input
                        type="radio"
                        name="size-choice"
                        value="XL"
                        class="sr-only"
                        aria-labelledby="size-choice-5-label"
                      />
                      <span id="size-choice-5-label">XL</span>

                      <span
                        class="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                      <input
                        type="radio"
                        name="size-choice"
                        value="2XL"
                        class="sr-only"
                        aria-labelledby="size-choice-6-label"
                      />
                      <span id="size-choice-6-label">2XL</span>

                      <span
                        class="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                      <input
                        type="radio"
                        name="size-choice"
                        value="3XL"
                        class="sr-only"
                        aria-labelledby="size-choice-7-label"
                      />
                      <span id="size-choice-7-label">3XL</span>

                      <span
                        class="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                  </div>
                </fieldset>
              </div> */}

                {!isInCart() ? (
                  <button
                    type="submit"
                    onClick={() => handleAddTocart(item())}
                    class="mt-10 flex w-full items-center justify-center rounded-full border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to cart
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/cart`);
                    }}
                    class="mt-10 flex w-full items-center justify-center rounded-full border border-transparent bg-danger px-8 py-3 text-base font-medium text-white hover:bg-danger/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    View Cart
                  </button>
                )}
              </form>
            </div>

            <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 class="sr-only">Description</h3>

                <div class="space-y-6">
                  <p class="text-base text-gray-900">
                    For single or dual-sided color printing Ribbon in PET with a
                    thin layer of specialized coatings. Very low concentration
                    of colorant insoluble in water. 5 whole panels – Yellow,
                    Magenta, Cyan, Black, Overlay: 98 mm length Overlay
                    thickness: 1.1 microns Compatible with PVC or composite
                    cards Printing lifespan: up to 3 years For dye-sublimation
                    and thermal transfer technologies Printing process:
                    diffusion temperature above 50°C / 122°F 300 full-color
                    prints per roll YMCKO ribbon (Yellow, Magenta, Cyan, Black,
                    and Overlay panels) Genuine ribbon sourced direct
                  </p>
                </div>
              </div>

              {/* ------------Key features ---------- */}

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">
                  GUARANTEED EXCELLENT PRINTING QUALITY
                </h3>

                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        All Evolis High Trust® consumables are tested and
                        approved by Evolis’ R&D and Quality Control departments.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">
                  AFFORDABLE CARD COST
                </h3>

                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Primacy 2 printing ribbons are among the best value for
                        money on the market.
                      </span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Panel management is optimized in the driver for color
                        ribbons, and a ribbon-saving feature for monochrome
                        ribbons allows you to make the best of your ribbons.
                      </span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Standard color ribbons combined with lamination enable
                        you to add security elements visible under UV light
                        easily (no specific ribbon required).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">
                  SIMPLE SET-UP AND OPERATION FEATURES
                </h3>

                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Primacy 2 ribbons can be installed in a snap and the
                        printer automatically senses the ribbon (RFID
                        communication).
                      </span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Easy4Pro range without cassette is the option for
                        experienced high-volume users wishing to reduce their
                        plastic consumption and their waste.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">
                  MAXIMIZED PRINTER LONGEVITY
                </h3>

                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        The printers’ settings are precision-adjusted to the
                        ribbons’ ink formula for optimal card printing quality
                        and speed.
                      </span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Using genuine Evolis High Trust® consumables extends the
                        life of Evolis systems’ print heads.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">
                  YMCKOO NEW RIBBON: A DOUBLE LAYER OF OVERLAY FOR A DOUBLE
                  PROTECTION
                </h3>

                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        The double layer of overlay brings to your printed cards
                        increased protection against wear and tear, without
                        lamination. The abrasion resistance is 3 times better
                        with the YMCKOO ribbon compared to standard YMCKO ribbon
                        protection.
                      </span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        The double overlay YMCKOO ribbon also gives you the
                        ability to use one of the overlay layers to easily
                        insert UV\light reflective elements for security
                        purposes, and the other overlay layer to fully protect
                        the card.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-4 lg:px-24 xl:px-24 2xl:px-4">
        <h1 class="text-gray-900 font-bold text-2xl">Related products</h1>
        <div class="grid md:grid-cols-4 grid-cols-1 gap-4 mt-12">
          <For each={CoreProducts.slice(0, 4)}>
            {(CoreProducts) => {
              return (
                <div>
                  <Cards product={CoreProducts} />
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
