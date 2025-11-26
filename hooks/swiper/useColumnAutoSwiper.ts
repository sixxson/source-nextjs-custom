"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules"

export function useColumnAutoSwiper(

) {
  useEffect(() => {
    // lấy tất cả container swiper dạng .swiper-column-auto
    const containers = document.querySelectorAll<HTMLElement>(".swiper-column-auto");

    containers.forEach((container, index) => {
      // tạo class ID riêng cho mỗi nhóm swiper
      const uniqueClass = `swiper-column-auto-id-${index}`;
      container.classList.add(uniqueClass);

      // đọc config từ class + attribute
      const config = {
        loop: container.classList.contains("swiper-loop"),
        touchMove: container.classList.contains("allow-touchMove") || true,
        mouseWheel: container.classList.contains("allow-mouseWheel")
          ? { forceToAxis: true }
          : false,
        autoHeight: container.classList.contains("auto-height"),
        hasVideo: container.classList.contains("auto-detect-video"),
        progressbar: container.classList.contains("progressbar"),
        time: Number(container.getAttribute("data-time")) || 0,
        autoplay: container.classList.contains("autoplay"),
      };

      // phần .swiper bên trong container
      const swiperEl = container.querySelector<HTMLElement>(".swiper");
      if (!swiperEl) return;

      // khởi tạo swiper
      new Swiper(swiperEl, {
        modules: [Navigation, Pagination, Mousewheel, Autoplay],
        speed: 3000,
        observer: true,
        observeParents: true,
        spaceBetween: 0,
        loop: config.loop,
        ...(config.autoplay && {
          autoplay: {
            delay: config.time,
          },
        }),
        slidesPerView: "auto",
        pagination: {
          el: `.${uniqueClass} .swiper-pagination`,
          clickable: true,
          ...(config.progressbar && { type: "progressbar" }),
        },
        mousewheel: config.mouseWheel,
        allowTouchMove: config.touchMove,
        navigation: {
          prevEl: `.${uniqueClass} .btn-prev`,
          nextEl: `.${uniqueClass} .btn-next`,
        },
        watchSlidesProgress: true,
        autoHeight: config.autoHeight,
      });
    });
  }, []);
}
