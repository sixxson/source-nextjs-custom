import React from 'react'
import ImageCustoms from "@/components/customUI/ImageCustoms"
import { Button } from "@/components/ui/button"

export default function Section1() {
  return (
    <section id="section_1" className="section-py container border-x-2">
      <div className="row items-center  ">
        <div className="col-6 !pl-0">
          <div className="flex flex-col gap-base justify-center items-start">
            <div className="heading-1 uppercase">
              <h1>
                something
              </h1>
            </div>
            <div className="body-1 format-content ">
              <p>
                <strong>
                  Commodo amet adipisicing cupidatat id laborum et esse et cupidatat. Anim duis in dolor eiusmod voluptate.
                </strong>
              </p>
              <p>
                Commodo amet adipisicing cupidatat id laborum et esse et cupidatat. Anim duis in dolor eiusmod voluptate. Enim ut nisi qui eu ullamco amet anim deserunt. Sit do nulla deserunt officia elit. Enim ut nisi qui eu ullamco amet anim deserunt. Sit do nulla deserunt officia elit.
              </p>
            </div>
            <Button
            variant={'outline'}
            className="btn-primary"
            >
              Khám phá thêm
            </Button>
          </div>
        </div>
        <div className="col-6 !pr-0 lg:w-[calc(760/1400*100%)]">
          <div className="w-full">
            <div className="img-ratio ratio:pt-[720_760] ">
              <ImageCustoms
                src='/img/GW機體.png'
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
