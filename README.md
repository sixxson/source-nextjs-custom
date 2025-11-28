# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

# Custom Hook

  ## 📌 useInitSwiperColumnAuto

    This hook automatically scans for all elements with the class .swiper-column-auto, reads configuration from their classes and attributes, assigns a unique ID class, and initializes a Swiper instance for each one.

    Perfect for pages with multiple Swiper groups without manually initializing each slid

  ### 📦 Import the Hook

     import { useInitSwiperColumnAuto } from "@/hooks/useInitSwiperColumnAuto";

  ### 🧩 Usage

    Call the hook once inside your component.
    Every .swiper-column-auto element inside the DOM will automatically be initialized.

    .swiper-column-auto.autoplay.progressbar(data-time="3000")
      .swiper
        .swiper-wrapper
          .swiper-slide
        .swiper-pagination
      .btn-prev
      .btn-next

  ### ⚙️ Configuration via Classes & Attributes
    The hook automatically detects settings based on the classes added to the .swiper-column-auto parent:

      | Class / Attribute  | Description                    |
      | ------------------ | ------------------------------ |
      | `swiper-loop`      | Enables looping                |
      | `autoplay`         | Enables autoplay               |
      | `progressbar`      | Pagination type = progressbar  |
      | `allow-touchMove`  | Enables touch/swipe            |
      | `allow-mouseWheel` | Enables mouse wheel navigation |
      | `auto-height`      | Enables autoHeight             |
      | `data-time="3000"` | Autoplay delay in ms           |

  ### 🧠 How It Works
    Each .swiper-column-auto container receives an auto-generated class:

      .swiper-column-auto-id-0
      .swiper-column-auto-id-1
      .swiper-column-auto-id-2
    The hook looks inside each container for:

      .swiper
      .swiper-pagination
      .btn-prev
      .btn-next

    A Swiper instance is created using these selectors and the detected configuration.

    No need to manually create separate Swiper initializations.

  ## 📌 useBackgroundElement

    This hook automatically detects all DOM elements that contain the custom attribute setBackground and applies a background image to them.

    It sets background-image, background-size, and background-position automatically, helping you avoid repetitive inline styling.
  
  ### 📦 Import the Hook

    import { useCountUp } from "@/hooks/useCountUp";

  ### 🧩 Usage

    Call the hook in any client component.

    All elements with the .countup class will animate automatically when they appear in the viewport (via scroll spy).

    <span className="countup" data-number="1250"></span>
  
  ### 🧠 How It Works

    The hook queries all elements with the .countup class.

    Reads the data-number attribute for the target value.

    Detects if the number is decimal (.) and adjusts decimal places accordingly.

    Initializes CountUp with:

  ## 📌 useDetectClose

  useDetectClose is a React hook that detects clicks outside a specified element or the pressing of the Escape key, and triggers a callback function when such events occur.
  
  It is commonly used to close dropdowns, modals, tooltips, or any overlay UI component.

  ### 📦 Import the Hook

    import { useDetectClose } from "@/hooks/useDetectClose";

  ### 🧩 Usage

  Pass a ref of the element you want to monitor and a callback function to execute when a click outside or Escape key press is detected.

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useDetectClose(dropdownRef, () => setIsOpen(false));

    return (
      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 bg-white shadow p-4"
          >
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        )}
      </div>
    );

  ### ⚙️ How It Works

    The hook listens for click events on the document.

    If the click is outside the referenced element, it calls the onClose callback.

    It also listens for the keyup event.

    If the user presses Escape, it calls the onClose callback.

    Event listeners are cleaned up automatically when the component unmounts.

  ## 📌 useIndicatorSlide

  useIndicatorSlide is a React hook that automatically animates elements with the class .indicator-swipe when they enter the viewport.

  It uses IntersectionObserver to detect visibility and temporarily adds an active class for animation effects.

  ### 📦 Import the Hook

    import { useIndicatorSlide } from "@/hooks/useIndicatorSlide";

  ### 🧩 Usage

  Call the hook in any client component.

  All elements with the class .indicator-swipe will receive an active class for 3 seconds when they appear in the viewport.

  + Exp:

      useIndicatorSlide();

      return (
        <div className="flex gap-2">
          <div className="indicator-swipe w-4 h-4 bg-gray-400 rounded-full"></div>
          <div className="indicator-swipe w-4 h-4 bg-gray-400 rounded-full"></div>
          <div className="indicator-swipe w-4 h-4 bg-gray-400 rounded-full"></div>
        </div>
      );

  ### ⚙️ How It Works

    The hook selects all elements with the class .indicator-swipe.

    It creates an IntersectionObserver to monitor when elements appear in the viewport.

    When an element becomes visible (entry.isIntersecting):

    Adds the class active

    Removes the class after 3 seconds

    This can trigger animations, highlights, or visual indicators.

  ## 📌 useMenuSpy

    useMenuSpy is a React hook that automatically highlights active menu items based on scroll position.

    It leverages the MenuSpy library to track sections and apply an active class to the corresponding menu item.

  ### 📦 Import the Hook

    import { useMenuSpy } from "@/hooks/useMenuSpy";


  ### 🧩 Usage

  Call the hook inside a client component.

  Make sure your menu has an ID of #menu-spy and links pointing to sections with corresponding IDs.

  + Exp:

      useMenuSpy();

      return (
        <nav id="menu-spy" className="flex gap-4">
          <a href="#section1">Section 1</a>
          <a href="#section2">Section 2</a>
          <a href="#section3">Section 3</a>
        </nav>
      );

  ### ⚙️ How It Works

    The hook queries for the element with ID menu-spy.

    Initializes MenuSpy on this element with the options:

    MenuSpy monitors scroll position and updates the active menu item dynamically.

  ## 📌 useReplaceSvgImages

    useReplaceSvgImages is a React hook that replaces all <img> elements with the class .img-svg by their corresponding inline <svg> code.

    This allows direct manipulation of SVGs via CSS, animations, or JavaScript, which is not possible with <img> tags.

  ### 📦 Import the Hook

  import { useReplaceSvgImages } from "@/hooks/useReplaceSvgImages";

  ### 🧩 Usage

  Call the hook inside a client component.

  All <img> elements with the class .img-svg will be replaced by inline <svg>.

  + Exp:

      useReplaceSvgImages();

      return (
        <div>
          <img src="/icons/arrow.svg" className="img-svg w-6 h-6 text-blue-500" />
        </div>
      );

  ### ⚙️ How It Works

    The hook selects all <img> elements with the .img-svg class.

    Fetches the SVG file from the src attribute.

    Parses the SVG text and creates a new <svg> element.

    Copies the classes from the original <img> to the <svg>.

    Replaces the <img> element with the inline <svg> in the DOM.

  ## 📌 useScrollToDiv

    useScrollToDiv is a React hook that enables smooth scrolling to a target element on the page when clicking on anchor links.

    It allows an optional spacing offset from the top, which is useful for fixed headers.

  ### 📦 Import the Hook

    import { useScrollToDiv } from "@/hooks/useScrollToDiv";

  ### 🧩 Usage

    Call the hook in a client component and pass a CSS selector for the anchor links you want to enable smooth scroll on.

  + Exp:

      useScrollToDiv("nav a", 80); // 80px offset for fixed header

      return (
        <nav>
          <a href="#section1">Section 1</a>
          <a href="#section2">Section 2</a>
          <a href="#section3">Section 3</a>
        </nav>
      )

  ### ⚙️ How It Works

    The hook queries all elements matching the provided selector.

    Adds a click event listener to each link.

    Prevents the default anchor link behavior.

    Gets the target element using the link’s hash.

    Scrolls the page smoothly to the target element, with an optional spacing offset

  ## 📌 useStickElementToEdge

    useStickElementToEdge is a React hook that automatically sticks elements to the left or right edge of the viewport relative to a container.

    It is useful for full-width backgrounds, floating elements, or decorative components that need to align with a central container while extending to the edges of the screen.

  ### 📦 Import the Hook

    import { useStickElementToEdge } from "@/hooks/useStickElementToEdge";

  ### 🧩 Usage

    Call the hook in a client component.

    Use the stick-to-edge attribute on elements you want to stick, and optionally use unstick-min to define a minimum screen width below which the element will revert to normal layout.

  + Exp:
      useStickElementToEdge();

      return (
        <div className="default-container-js mx-auto">
          <div stick-to-edge="left" unstick-min="1024" className="bg-red-500 w-10 h-10"></div>
          <div stick-to-edge="right" className="bg-blue-500 w-10 h-10"></div>
        </div>
      );

  ### ⚙️ How It Works

    The hook queries all elements with the [stick-to-edge] attribute.

    Reads the attribute value to determine which edge to stick (left or right).

    Computes the offset relative to the central container (.default-container-js) so the element aligns with the container edge while extending to the viewport edge.

    If the window width is smaller than the unstick-min value (default 1200px), the element's style is removed so it reverts to normal layout.

  ## 📌 useFancybox

    useFancybox is a React hook that integrates Fancybox for image galleries, videos, or other lightbox content.

    It allows you to easily bind Fancybox to a container and manage its lifecycle in a React-friendly way

  ### 📦 Import the Hook

    import useFancybox from "@/hooks/useFancybox";

  ### 🧩 Usage

    Call the hook in a client component and bind Fancybox to a container element using the returned setter.

  + Exp:

     const [fancyboxRef] = useFancybox({
      // Your custom options
      });

      return (
        <div ref={fancyboxRef}>
          <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
            <img src="https://lipsum.app/id/60/200x150" alt="Sample image #1" />
          </a>
        </div>
      )

  ### ⚙️ How It Works

    The hook uses useState to store a reference to the root container.

    When the root is set, it calls: Fancybox.bind(root, "[data-fancybox]", options);

    Automatically unbinds Fancybox when the component unmounts or the root changes.

    Accepts any FancyboxOptions for customization, e.g., Toolbar, Thumbnails, infinite, etc.