import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectCoverflow, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"

import applications from "../data/applications"
import ApplicationCard from "./ApplicationCard"

function MachineSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto my-20 px-4 relative">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Medical Treatments
      </h2>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev-custom absolute left-2 md:-left-8 top-1/2 z-20 -translate-y-1/2 cursor-pointer text-blue-600 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all select-none">
        ❮
      </div>
      <div className="swiper-button-next-custom absolute right-2 md:-right-8 top-1/2 z-20 -translate-y-1/2 cursor-pointer text-blue-600 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all select-none">
        ❯
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        speed={1000}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView={1.5}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-12" // Add padding bottom for pagination dots
      >
        {/* Static First Card (AMI SOLUTIONS) */}
        <SwiperSlide className="h-auto py-4">
          <div className="h-64 w-full rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 flex flex-col justify-center items-center text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3 tracking-wide w-full text-center">
              AMI SOLUTIONS
            </h3>
            <div className="w-16 h-1 bg-yellow-400 mb-4 rounded-full"></div>
            <p className="text-gray-300 text-sm font-medium">
              Advanced Aesthetic Technologies & Medical Laser Systems
            </p>
          </div>
        </SwiperSlide>

        {applications.map((app) => (
          <SwiperSlide key={app.id} className="h-auto py-4">
            <div className="h-full">
              <ApplicationCard application={app} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MachineSlider
