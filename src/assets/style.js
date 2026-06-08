// assets/dummy/dummystyles.js
    
// Updated navbarStyles
export const navbarStyle = {
  nav: (scrolled) =>
    `fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ${
      scrolled ? "shadow-md py-2" : "py-4"
    }`,

 header: "sticky top-0 z-50 pb-5  flex justify-center overflow-x-hidden ",
  nav: "bg-purple-100 shadow-lg rounded-lg xl:rounded-full sm:rounded-xl lg:rounded-full md:rounded-full mt-5 sm:px-3 md:px-5  w-[95%] md:w-[90%] max-w-5xl overflow-visible",
  // Container
  container: "flex items-center justify-between",
  
  // Brand/Logo
  brandContainer: "flex items-center ",
  logoContainer: "flex items-center justify-center rounded-full bg-pink-200 p-2 mr-3",
  logoIcon: "h-6 w-6 text-gray-800",
  logoLink: "flex items-baseline gap-2 select-none",
  logoText: "text-lg sm:text-2xl md:text-2xl font-light tracking-wide",
  
  // Desktop Navigation
  desktopNav: "hidden md:flex items-center space-x-2 lg:ml-30 ml-1 ",
  navItemBase: "relative flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200",
  navItemActive: "text-gray-900 font-semibold",
  navItemInactive: "text-gray-700 hover:text-gray-900",
  activeIndicator: "absolute left-0 -bottom-1 w-full h-0.5 rounded-full transition-opacity duration-200",
  activeIndicatorVisible: "opacity-100 bg-gradient-to-r from-gray-600 to-gray-400",
  activeIndicatorHidden: "opacity-0",
  
  // Right Actions
  rightActions: "flex items-center gap-6",
  cartLink: "text-gray-500 hover:text-gray-700 transition-colors relative",
  cartIcon: "h-5 w-5",
  cartBadge: "absolute top-0 right-0 -translate-x-1/2 sm:-top-4 sm:-right-4 sm:translate-x-0 inline-flex items-center justify-center px-1.5 py-1 text-xs rounded-full bg-gray-500 text-white font-medium",
  
  // Account Links
  accountLink: "hidden md:flex items-center cursor-pointer text-gray-500 hover:text-gray-700 transition-colors",
  accountIcon: "h-5 w-5 mr-1",
  accountText: "text-sm",
  
  // Mobile Menu
  mobileMenuButton: "md:hidden",
  menuButton: "text-purple-900 hover:text-gray-600",
  menuIcon: "h-6 w-6",
  
  // Mobile Menu Content
  mobileMenu: "md:hidden mt-4 pb-4 border-t border-gray-200 pt-4",
  mobileMenuContainer: "flex flex-col space-y-2",
  mobileNavItemBase: "flex xl:items-center justify-center lg:items-center md:items-center px-4 py-2 text-sm rounded-lg transition-colors",
  mobileNavItemActive: "bg-purple-900 text-purple-100 font-semibold",
  mobileNavItemInactive: "text-gray-700 hover:bg-gray-50",
  mobileNavItemText: "font-medium",
  
  // Mobile Account Section
  mobileAccountContainer: "px-4 pt-2",
  mobileAccountLink: "flex xl:items-center justify-center lg:items-center md:items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50",
  mobileAccountButton: "w-full flex xl:items-center justify-center lg:items-center md:items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50",
  mobileAccountIcon: "h-4 w-4",
  
  // Inline styles
  logoTextStyle: {
    fontFamily: "'Playfair Display', serif",
    color: "#0a0a0a"
  },
  playfairFont: { fontFamily: "'Playfair Display', serif" }
};
//banner

export const categoriesHomeStyles = {
  // Layout
  section: "min-h-screen py-5 md:py-20 px-4",
  container: "max-w-5xl mt-5  mx-auto ",
  
  // Header
  header: "text-center mb-5",
  h1: "text-5xl text-black   font-semibold  [font-family:'Playfair_Display'] ",
  h1SpanRegular: "inline",
  h1SpanAccent: "ml-3",


  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8",
  
  // Cards
  cardLink: "group block focus:outline-none",
  cardWrapper: "relative overflow-hidden rounded-xl border transition-shadow duration-300 bg-white shadow-sm hover:shadow-lg focus:shadow-lg border-gray-200",
  imageContainer: "w-full aspect-square bg-gray-100 flex items-center justify-center overflow-hidden",
  image: "w-full h-full object-cover transform transition-transform duration-500",
  cardHover:"bg-white ",
  cardNormal:"bg-purple-200",
  // Card content
  cardContent: "p-3 md:p-4 text-center",
  cardTitleBase: "text-md md:text-xl font-medium bg-purple-900 py-2 text-white truncate transition-colors duration-300",
  cardTitleHover: "text-amber-600",
  cardTitleNormal: "text-gray-800",
  cardTagline: "text-xs text-gray-500 mt-1 hidden md:block",
  
  // Focus ring
  focusRing: "absolute inset-0 pointer-events-none ring-0 focus:ring-4 focus:ring-amber-200",
  
  // Inline styles
  h1FontSize: { fontSize: "clamp(1.6rem, 3.8vw, 2.75rem)" },
  playfairFont: { fontFamily: "'Playfair Display', serif" },
  
  // Media queries (for style tag)
  styleString: `
    @media (max-height: 500px) {
      .aspect-square { min-height: 120px; }
    }
    @media (max-width: 360px) {
      .gap-4 { gap: 10px; }
    }
  `
};

export const footerStyles = {

  footer: "bg-purple-900 overflow-hidden",
  designerLink: "text-md text-gray-100",

}

export const brandPageStyles = {
  // Layout styles
  container: "min-h-screen flex items-center justify-center p-6 ",
  notFoundCard: "max-w-lg text-center bg-white rounded-2xl shadow-lg p-8 border border-purple-200",
  notFoundTitle: "text-2xl font-semibold mb-4 text-gray-800",
  notFoundText: "text-gray-600 mb-6",
  goBackButton: "px-6 py-3 bg-purple-500 cursor-pointer text-white rounded-full hover:bg-purple-600 transition-all flex items-center justify-center gap-2 mx-auto",
  
  // Main container
  mainContainer: "min-h-screen bg-cover bg-fixed opacity-100 bg-center py-8 px-4 sm:px-6 md:px-8 lg:px-12",
  
  // Header
  headerContainer: "flex flex-col sm:flex-row items-center sm:items-start justify-between mb-8 gap-6",
  backButtonContainer: "flex items-center z-10",
  backButton: "flex items-center gap-2 text-gray-800 cursor-pointer transition-colors group",
  backIcon: "p-2 rounded-full bg-purple-900 text-white shadow-md transition-all",
  backText: "font-medium hidden sm:inline text-xl  ",
  
  // Title
  titleContainer: "flex-1 flex flex-col items-center justify-center z-10",
  title: "text-3xl sm:text-4xl md:text-5xl font-bold  text-gray-900   capitalize w-fit text-center",
  
  // product Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 space-y-10 relative z-10 py-10 sm:py-20 px-5 md:mx-20",
  
  // product Card
  card: "w-60 h-90",
  
  // Image Container
  imageContainer: "",
  image: "h-full w-full object-contain transition-transform duration-500",
  
  // Details Container
  detailsContainer: "p-4",
  productName: "font-semibold text-gray-800 text-lg sm:text-xl mb-1 font-[pacifico] truncate",
  productDesc: "text-gray-600 text-center text-sm mb-3 line-clamp-2 h-10",
  
  // Price and Controls
  priceAndControls: " block md:flex items-center gap-5 md:justify-between justify-center",
  price: "text-lg font-semibold text-yellow-700",
  
  // Quantity Controls
  quantityContainer: "flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1",
  quantityButton: "p-1 rounded-full cursor-pointer transition",
  quantityCount: "px-3 text-sm font-medium w-10 text-center",
  
  // Add Button
  addButton: "flex items-center cursor-pointer bg-gray-300 gap-1 hover:bg-gradient-to-r from-gray-300 to-gray-500 text-black px-3 py-1.5 rounded-xl transition-all duration-200 text-sm"
};

const loginPageStyles = {
  // Page layout
  pageContainer: "relative min-h-screen font-sans",
  toastContainer: "", // Empty since ToastContainer handles its own styles
  
  // Main content
  mainContent: "relative z-10 flex justify-center items-center min-h-screen p-4",
  
  // Back button
  backButton: "absolute top-6 cursor-pointer left-6 z-20 bg-purple-900 text-white backdrop-blur-sm rounded-full p-2 shadow-md flex items-center justify-center transition-transform transform hover:-translate-y-0.5",
  backButtonText: "ml-1",
  
  // Login card
  loginCard: "w-full max-w-md p-8 rounded-2xl bg-white shadow-xl transform transition-all duration-300 hover:shadow-2xl relative overflow-hidden",
  
  // Decorative elements
  decorativeTopLeft: "absolute -top-15 -left-18 w-40 h-40  bg-purple-900  rounded-full opacity-100",
  decorativeBottomRight: "absolute -bottom-10 -right-10 w-24 h-24 bg-purple-900 rounded-full opacity-100",
  
  // Card content
  cardTitle: "text-3xl font-semibold text-center text-gray-800 mb-2",
  cardSubtitle: "text-center text-purple-900 mb-8",
  
  // Form
  form: "",
  
  // Form fields
  formField: "mb-5",
  formLabel: "block text-gray-600 text-sm font-medium mb-2",
  inputContainer: "relative",
  inputIconContainer: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputIcon: "h-5 w-5 text-gray-400",
  
  // Input styles
  inputBase: "w-full pl-10 p-3 text-gray-700 border border-purple-400 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200",
  passwordInputBase: "w-full pl-10 pr-10 p-3 text-gray-700 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200",
  
  // Password toggle
  passwordToggle: " cursor-pointer absolute inset-y-0 right-0 pr-3 flex items-center",
  
  // Checkbox/Remember me
  rememberMeContainer: "flex items-center mb-6",
  checkboxContainer: "flex items-center h-5",
  checkbox: "h-4 w-4 text-purple-500 border-purple-300 rounded focus:ring-purple-400",
  checkboxLabelContainer: "ml-3 text-sm",
  checkboxLabel: "font-medium cursor-pointer text-purple-700",
  requiredStar: "text-red-500",
  
  // Submit button
  submitButton: "mb-10 w-full py-3 px-4 cursor-pointer  text-black bg-purple-900 text-white rounded-full shadow-md text-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-300 transform hover:-translate-y-1",
  
  // Sign up link
  signupContainer: "mt-4 text-center flex justify-center text-center ",
  signupText: "text-sm text-gray-500",
  signupLink: "text-sm text-purple-900 font-medium",
};


export {  loginPageStyles };

export const signUpStyles = {
  // Main container
  pageContainer: "min-h-screen  flex pt-20 items-center justify-center p-6",
  pageFontStyle: { fontFamily: "'Poppins', sans-serif" },
  
  // Back button
  backButton: "absolute top-6 left-6 cursor-pointer z-30 bg-purple-900 text-white backdrop-blur-sm rounded-full p-2 shadow-sm flex items-center justify-center transition-transform transform",
  backIcon: "h-5 w-5 text-white",
  backText: "ml-1 ",
  
  // Form container
  formContainer: "w-full max-w-md",
  card: "bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-8 py-10 relative overflow-hidden",
  
  // Decorative elements
  decorativeCircle: "  absolute -top-10 -right-10 w-28 h-28 bg-purple-900 rounded-full opacity-100 ",
   decorativeTopLeft: "absolute -top-15 -left-18  w-40 h-40 bg-purple-900 rounded-full opacity-100",
  
  // Headings
  title: "text-2xl font-semibold  text-center mb-2",
  titleFontStyle: { fontFamily: "'Playfair Display', serif" },
  subtitle: "text-center text-sm text-purple-900  mb-6",
  
  // Form
  form: "space-y-4",
  label: "text-sm text-gray-600 block",
  
  // Input fields
  inputContainer: "relative",
  inputIconContainer: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputIcon: "h-5 w-5 text-gray-400",
  inputField: "w-full pl-10 p-3 border border-purple-900 rounded-xl focus:ring-2 focus:ring-purple-900 focus:border-transparent transition",
  passwordInputField: "w-full pl-10 pr-10 p-3  border border-purple-800 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition",
  
  // Password toggle
  passwordToggleButton: "cursor-pointer absolute inset-y-0 right-0 cursor-pointer pr-3 flex items-center",
  passwordToggleIcon: "h-5 w-5 text-gray-400",
  
  // Remember me checkbox
  checkboxContainer: "flex items-center justify-between",
  checkboxLabel: "flex cursor-pointer items-center text-sm select-none  ",
  checkboxInput: "h-4 w-4 text-purple-900 border-purple-300 rounded focus:ring-purple-900",
  checkboxText: "ml-2 text-purple-900",
  
  // Submit button
  submitButton: "w-full py-3 rounded-full  cursor-pointer bg-purple-900 text-white font-medium shadow-md text-xl hover:-translate-y-0.5 transition-transform",
  
  // Bottom link
  bottomContainer: "mt-4 text-center",
  bottomText: "text-sm text-gray-500",
  loginLink: "text-sm text-purple-900 font-medium"
};

export const ProductPageStyles = {
  // Layout
  container: "px-6 sm:px-8 md:px-12 lg:px-24 py-12  min-h-screen",
  
  // Header Section
  headerContainer: "flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-10 gap-6 md:gap-0",
  headerTitle: "text-3xl sm:text-4xl md:text-6xl text-gray-900 font-bold  ",
  titleAccent: " text-purple-900 bg-clip-text ",
  headerDescription: "mt-3 text-sm md:text-md text-gray-900 max-w-xl",
  
  // Filter Buttons
  filterContainer: "flex flex-wrap items-center gap-3",
  filterButtonBase: "inline-flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full text-sm font-medium transition",
  filterButtonActive: "bg-gradient-to-r from-gray-400 to-gray-600 text-white",
  filterButtonInactive: "bg-white text-gray-700 border hover:shadow-sm",
  filterIcon: "w-4 h-4",
  
  // Grid
  grid: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 md:gap-10",
  
  // Product Card
  card: "group text-center",
  imageContainer: "relative mx-auto max-w-[240px] w-full h-[320px] md:h-[420px]",
  image: "w-full h-full object-contain",
  
  // Cart Controls
  cartControlsContainer: "absolute left-1/2 -translate-x-1/2 bottom-2",
  cartQuantityControls: "inline-flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow",
  cartButton: "p-2 rounded cursor-pointer",
  cartQuantity: "px-3 py-1 min-w-[36px] text-center font-medium",
  addToCartButton: "flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white shadow hover:bg-gradient-to-br from-gray-200 to-gray-400",
  addToCartIcon: "w-4 h-4",
  
  // Product Info
  productInfo: "mt-4",
  productName: "text-sm font-semibold uppercase",
  productDescription: "text-xs text-gray-500",
  productPrice: "mt-2 text-sm font-medium"
};

export const contactPageStyles = {
  // Page layout
  pageContainer: "min-h-screen  py-12 sm:py-16 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12",
  innerContainer: "max-w-7xl mx-auto",
  
  // Header section
  pageHeader: "text-center mb-8 sm:mb-10 md:mb-10",
  pageTitle: "text-3xl sm:text-4xl md:text-5xl font-medium",
  pageSubtitle: "mt-2 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base",
  
  // Main grid
  mainGrid: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-8 items-start",
  
  // Left column - Form
  leftColumn: "lg:col-span-7 order-1 lg:order-1",
  formCard: "  p-6 sm:p-8 md:p-8 lg:p-8",
  form: "space-y-5",
  inputGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  
  // Input styles
  inputLabel: "text-sm text-gray-600",
  requiredStar: "text-red-500",
  inputContainer: "mt-2 relative",
  inputIconContainer: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputBase: "w-full rounded-xl border border-purple-900 px-4 py-3 pl-12 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition",
  inputNormal: "border-gray-200",
  inputError: "border-rose-400",
  errorMessage: "text-rose-500 text-xs mt-1 flex items-center gap-2",
  
  // Textarea
  textareaContainer: "mt-2 w-full rounded-xl border px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition",
  
  // Form buttons
  buttonsContainer: "flex flex-col justify-between sm:flex-row items-start sm:items-center gap-3 sm:gap-4",
  submitButton: "inline-flex items-center gap-3 bg-gradient-to-r from-purple-700 to-purple-800 text-white px-5 sm:px-6 py-3 rounded-full shadow hover:scale-[1.02] cursor-pointer transition-transform disabled:opacity-60",
  clearButton: "inline-flex bg-gray-900 text-white items-center cursor-pointer gap-2 border border-purple-200 px-4 py-3 rounded-xl text-sm hover:bg-purple-500 transition-colors",
  
  // Right column
  rightColumn: "lg:col-span-5 order-2 lg:order-2",
  rightColumnGrid: "grid grid-cols-1 gap-4 items-start",
  
  // Creative card
  creativeCardBase: "rounded-2xl p-4 border border-gray-100 bg-gradient-to-r shadow-lg",
  creativeCardIconContainer: "p-3 rounded-lg bg-white/90 backdrop-blur",
  creativeCardTitle: "font-semibold",
  creativeCardSubtitle: "text-sm text-gray-600 mt-2",
  creativeCardButtonBase: "inline-flex bg-gradient-to-br from-gray-300 to-gray-400 items-center gap-2 px-3 py-2 rounded-lg text-black text-sm font-medium shadow-sm",
  
  // Toast
  toastBase: "fixed left-1/2 -translate-x-1/2 bottom-8 z-50 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg",
  toastError: "bg-rose-500 text-white",
  toastSuccess: "bg-black text-white",
  
  // Accent backgrounds for creative cards
  accentAmber: "from-gray-300 to-gray-400",
  accentIndigo: "from-indigo-50 to-cyan-50",
  
  // Button accent classes
  buttonAmber: "bg-amber-50 text-amber-700",
  buttonIndigo: "bg-indigo-600 text-white",
};


export const cartPageStyles = {
  // Page layout
  pageContainer: "min-h-screen  py-6 sm:py-8 md:py-10 lg:py-8 px-4 sm:px-6 md:px-8 lg:px-10",
  maxWidthContainer: "max-w-6xl mx-auto",
  
  // Empty cart state
  emptyCartContainer: "min-h-screen  flex items-center justify-center p-6",
  emptyCartCard: "max-w-md text-center bg-white rounded-2xl shadow-lg p-8 border border-purple-200",
  emptyCartIcon: "mx-auto text-purple-400 mb-4",
  emptyCartTitle: "text-2xl font-semibold mb-4 text-purple-900",
  emptyCartText: "text-gray-600 mb-6",
  emptyCartButton: "px-6 py-3 font-semibold text-white bg-purple-900 hover:bg-purple-600   rounded-full transition-all inline-block",
  
  // Header section
  headerContainer: "flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8",
  backButtonContainer: "flex items-center gap-2 text-purple-800 mb-4 sm:mb-0",
  backLink: "flex items-center gap-2 text-gray-800 cursor-pointer transition-colors",
  backIconContainer: "p-2 rounded-full text-white bg-purple-900 shadow-md transition-all",
  backText: "font-medium",
  cartTitle: "text-3xl xl:pt-20 xl:ml-65 ml-5 pt-5 md:ml-15 md:pt-20 lg:ml-50 font-[pacifico] font-bold text-purple-100  ",
  clearCartButton: "mt-4 sm:mt-0 bg-white py-3 px-3 rounded sm:ml-auto text-red-500 cursor-pointer flex items-center gap-1",
  
  // Main grid
  mainGrid: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mb-8",
  
  // Left column container
  leftColumn: "lg:col-span-2 space-y-6 order-1",
  
  // Form container
  formContainer: "bg-white font-[pacifico] rounded-xl shadow-md p-6",
  formTitle: "text-xl font-semibold mb-4 text-gray-800",
  formSubtitle: "text-sm text-gray-500 mb-4",
  form: "space-y-4",
  inputGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  
  // Common form inputs
  inputBase: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:shadow-md focus:scale-[1.01] transition-transform duration-150",
  textareaBase: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:shadow-md focus:scale-[1.01] transition-transform duration-150 resize-y",
  selectBase: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:shadow-md focus:scale-[1.01] transition-transform duration-150",
  
  // Form buttons
  formButtonsContainer: "flex flex-col sm:flex-row gap-3",
  submitButton: "flex-1 bg-purple-600 hover:bg-purple-900 text-white py-3 rounded-full cursor-pointer transition-colors",
  continueShoppingButton: "px-6 py-3 border border-gray-500 text-black rounded-full transition-all text-center",
  
  // Cart items grid
  cartItemsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6",
  
  // Individual cart item
  cartItemCard: "bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300",
  cartItemImageContainer: "relative h-48 overflow-hidden flex items-center justify-center my-5",
  cartItemImage: " p-4 object-contain transition-transform duration-500",
  cartItemContent: "p-4",
  cartItemName: "font-semibold text-purple-900 text-center text-lg mb-1 truncate",
  cartItemPrice: "text-yellow-600 text-center font-semibold text-md mb-4",
  quantityContainer: "flex items-center justify-between",
  quantityControls: "flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1",
  quantityButton: "text-gray-600 cursor-pointer p-1",
  quantityText: "text-sm font-medium w-6 text-center",
  removeButton: "text-red-500 cursor-pointer p-2",
  
  // Order summary (right column)
  orderSummaryContainer: "bg-white rounded-xl shadow-md p-6 order-2",
  orderSummaryTitle: "text-xl font-semibold mb-6 text-purple-900 border-b pb-2",
  orderSummaryContent: "space-y-4 mb-6",
  summaryRow: "flex justify-between",
  summaryLabel: "text-gray-600",
  summaryValue: "font-medium",
  totalContainer: "flex justify-between items-center text-lg font-bold border-t pt-4 mb-6",
};


