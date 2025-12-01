import React from 'react'
import "./Section-2.scss"
import ImageCustoms from "../../../customUI/ImageCustoms"
import { Button } from "../../../ui/button"



export default function Section2() {
  return (
    <section className="section-py section-2">
      <div className="container flex-center flex-col gap-base">
        <div className="content-title">
          <div className="title">
            <h2>
              Sản Phẩm
            </h2>
          </div>
          <div className="subTitle">
            <p>
              Phân phối thiết bị, giải pháp, dịch vụ trong lĩnh vực âm thanh, ánh sáng, hình ảnh cho sân khấu biểu diễn chuyên nghiệp, bar – club, phát thanh truyền hình, hội thảo và studio
            </p>
          </div>
        </div>
        <div className="list-image grid grid-cols-3 gap-base">
          <div className="img-ratio ratio:pt-[560_440] rem:w-[440px]">
            <ImageCustoms src="/img/1.png" />
          </div>
          <div className="img-ratio ratio:pt-[560_440] rem:w-[440px]">
            <ImageCustoms src="/img/2.png" />
          </div>
          <div className="img-ratio ratio:pt-[560_440] rem:w-[440px]">
            <ImageCustoms src="/img/3.png" />
          </div>
          <Button
            variant={'outline'}
            className="btn-primary font-bold col-span-full">
            Xem ngay siêu phẩm
          </Button>
        </div>
      </div>
    </section>
  )
}
