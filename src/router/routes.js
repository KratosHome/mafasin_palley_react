import ContactPage from "../pages/ContactPage/ContactPage";
import ProductCatalog from "../pages/ProductCatalog/ProductCatalog";

export const publicRoutes = [
  {
    path: "/products",
    component: ProductCatalog,
    exact: true,
  },
];
export const privateRoutes = [
  {
    path: "/contact_ass",
    component: ContactPage,
    exact: true,
  },
];

/*
  {
	path: "/about_ass",
	component: -,
	exact: true,
 },
 {
	path: "/faqs",
	component: -,
	exact: true,
 },
 {
	path: "/blog",
	component: -,
	exact: true,
 },
 {
	path: "/contact_ass",
	component: -,
	exact: true,
 },
 {
	path: "/search",
	component: -,
	exact: true,
 },
 {
	path: "/likes",
	component: -,
	exact: true,
 },
 {
	path: "/cart",
	component: -,
	exact: true,
 },
*/
