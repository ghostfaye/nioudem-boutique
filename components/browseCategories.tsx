import Link from 'next/link';
import Image from 'next/image';

export default function BrowseCategories() {
    return (
        <div className="max-w-full pb-8">
            <div className="px-6 pt-4">
                <div className="text-lg sm:text-xl font-semibold pt-6">Rechercher par categories</div>
                <div className="pt-6">
                    <div className="grid lg:grid-flow-col lg:grid-rows-3 gap-3">
                        <div className="p-4 bg-white rounded-md border border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="inline-flex justify-start items-center w-4/5">
                                    <div className="w-1/2 sm:w-auto">
                                        <Link href="/category/Food & Snacks" passHref>
                                            <Image
                                                height={100}
                                                width={100}
                                                src="https://m.media-amazon.com/images/I/71J93R3+TkL._AC_UL480_FMwebp_QL65_.jpg"
                                                objectFit="contain"
                                            />
                                        </Link>
                                    </div>
                                    <div className="pl-2 sm:pl-4 w-1/2 sm:w-auto">
                                        <div className="flex flex-col text-sm sm:text-base">
                                            <div className="text-green-600 text-xs uppercase font-semibold">
                                                jusqu'a -10% 
                                            </div>
                                            <div className="pt-2 uppercase text-sm font-bold">
                                                Biscuits & Snacks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-yellow-600 pl-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="inline-flex justify-start items-center w-4/5">
                                    <div className="w-1/2 sm:w-auto">
                                        <Link href="/category/Beverages" passHref>
                                            <Image
                                                height={100}
                                                width={100}
                                                src="https://m.media-amazon.com/images/I/71PiszDkulL._SL1500_.jpg"
                                                objectFit="contain"
                                            />
                                        </Link>
                                    </div>
                                    <div className="pl-2 sm:pl-4 w-1/2 sm:w-auto">
                                        <div className="flex flex-col">
                                            <div className="text-green-600 text-xs uppercase font-semibold">
                                            jusqu'a -10%
                                            </div>
                                            <div className="pt-2 uppercase text-sm font-bold">
                                                Boissons
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-yellow-600 pl-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="inline-flex justify-start items-center w-4/5">
                                    <div className="w-1/2 sm:w-auto">
                                    <Link href="/category/Fruits & Vegetables" passHref>
                                            <Image
                                                height={100}
                                                width={100}
                                                src="https://m.media-amazon.com/images/I/319jVF8LQyS._AC_UL480_FMwebp_QL65_.jpg"
                                                objectFit="contain"
                                            />
                                        </Link>
                                    </div>
                                    <div className="pl-2 sm:pl-4 w-1/2 sm:w-auto">
                                        <div className="flex flex-col">
                                            <div className="text-green-600 text-xs uppercase font-semibold">
                                                Jusqu'a -10% 
                                            </div>
                                            <div className="pt-2 uppercase text-sm font-bold">
                                                Fruits & Legumes
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-yellow-600 pl-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="inline-flex justify-start items-center w-4/5">
                                    <div className="w-1/2 sm:w-auto">
                                    <Link href="/category/Personal Care" passHref>
                                            <Image
                                                height={100}
                                                width={100}
                                                src="https://m.media-amazon.com/images/I/71KKYecRpiL._SY355_.jpg"
                                                objectFit="contain"
                                            />
                                        </Link>
                                    </div>
                                    <div className="pl-2 sm:pl-4 w-1/2 sm:w-auto">
                                        <div className="flex flex-col">
                                            <div className="text-green-600 text-xs uppercase font-semibold">
                                                Jusqu'a -10% 
                                            </div>
                                            <div className="pt-2 uppercase text-sm font-bold">
                                                Soins Personels
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-yellow-600 pl-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="inline-flex justify-start items-center w-4/5">
                                    <div className="w-1/2 sm:w-auto">
                                    <Link href="/category/Pet Food" passHref>
                                            <Image
                                                height={100}
                                                width={100}
                                                src="https://m.media-amazon.com/images/I/61DtYJyqHeL._SX679_.jpg"
                                                objectFit="contain"
                                            />
                                        </Link>
                                    </div>
                                    <div className="pl-2 sm:pl-4 w-1/2 sm:w-auto">
                                        <div className="flex flex-col">
                                            <div className="text-green-600 text-xs uppercase font-semibold">
                                                Jusqu'a -10%
                                            </div>
                                            <div className="pt-2 uppercase text-sm font-bold">
                                                Soins animalier
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-yellow-600 pl-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="inline-flex justify-start items-center w-4/5">
                                    <div className="w-1/2 sm:w-auto">
                                    <Link href="/category/Household Items" passHref>
                                            <Image
                                                height={100}
                                                width={100}
                                                src="https://m.media-amazon.com/images/I/61zl3nbmnBL._SX679_.jpg"
                                                objectFit="contain"
                                            />
                                        </Link>
                                    </div>
                                    <div className="pl-2 sm:pl-4 w-1/2 sm:w-auto">
                                        <div className="flex flex-col">
                                            <div className="text-green-600 text-xs uppercase font-semibold">
                                                Jusqu'a  -30% 
                                            </div>
                                            <div className="pt-2 uppercase text-sm font-bold">
                                                Entretien maison
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-yellow-600 pl-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="inline-flex justify-start items-center w-4/5">
                                    <div className="w-1/2 sm:w-auto">
                                        <Link href="/category/Noodles, Sauces & Instant Food" passHref>
                                            <Image
                                                height={100}
                                                width={100}
                                                src="https://m.media-amazon.com/images/I/71-FhSJVzlL._AC_UL480_FMwebp_QL65_.jpg"
                                                objectFit="contain"
                                            />
                                        </Link>
                                    </div>
                                    <div className="pl-2 sm:pl-4 w-1/2 sm:w-auto">
                                        <div className="flex flex-col">
                                            <div className="text-green-600 text-xs uppercase font-semibold">
                                                Jusqu'a  -35% 
                                            </div>
                                            <div className="pt-2 uppercase text-sm font-bold">
                                                Nouilles & Plats instantanés
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-yellow-600 pl-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="inline-flex justify-start items-center w-4/5">
                                    <div className="w-1/2 sm:w-auto">
                                    <Link href="/category/Breakfast & Dairy" passHref>
                                            <Image
                                                height={100}
                                                width={100}
                                                src="https://m.media-amazon.com/images/I/71cqU2ZyPNL._AC_UL480_FMwebp_QL65_.jpg"
                                                objectFit="contain"
                                            />
                                        </Link>
                                    </div>
                                    <div className="pl-2 sm:pl-4 w-1/2 sm:w-auto">
                                        <div className="flex flex-col">
                                            <div className="text-green-600 text-xs uppercase font-semibold">
                                                Jusqu'a -15%
                                            </div>
                                            <div className="pt-2 uppercase text-sm font-bold">
                                                Petit dejeuner
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-yellow-600 pl-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-300">
                            <div className="flex justify-between items-center">
                                <div className="inline-flex justify-start items-center w-4/5">
                                    <div className="w-1/2 sm:w-auto">
                                    <Link href="/category/Grocery & Staples" passHref>
                                            <Image
                                                height={100}
                                                width={100}
                                                src="https://m.media-amazon.com/images/I/61n1hm72dlL._AC_UL480_FMwebp_QL65_.jpg"
                                                objectFit="contain"
                                            />
                                        </Link>
                                    </div>
                                    <div className="pl-2 sm:pl-4 w-1/2 sm:w-auto">
                                        <div className="flex flex-col">
                                            <div className="text-green-600 text-xs uppercase font-semibold">
                                               Jusqu'a -20%
                                            </div>
                                            <div className="pt-2 uppercase text-sm font-bold">
                                                Epicerie
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-yellow-600 pl-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
