/* eslint-disable @next/next/no-img-element */
"use client";

import { Carousel } from "react-responsive-carousel";
import RichContent from "@/components/Content/RichContent";

export default function ManagedPostCard({ post }) {
  const images = Array.isArray(post.images)
    ? post.images
    : (post.slike || []).map((url) => ({ url }));
  const videos = Array.isArray(post.videos)
    ? post.videos
    : post.video
      ? [{ url: post.video }]
      : [];
  const hasImages = images.length > 0;
  const hasMedia = images.length > 0 || videos.length > 0;

  return (
    <section data-aos="fade-in" className="w-full bg-white pb-20">
      <div className="container mx-auto px-4">
        <div className="my-4 block rounded border border-solid border-blueGray-100 p-3 text-blueGray-700">
          <h6 className="mb-1 text-center text-xl font-semibold uppercase">{post.title || post.naslov}</h6>
        </div>
        <div className="flex flex-wrap">
          {hasMedia && (
            <div className="w-full px-6 pt-6 text-center md:w-6/12 lg:pt-12">
              {hasImages && (
                <div className="relative mb-8 flex min-w-0 flex-col break-words bg-blueGray-200 shadow-lg">
                  <div className="flex-auto py-5">
                    <Carousel showThumbs={false} showStatus={false} interval={10000} transitionTime={1000} infiniteLoop={images.length > 1}>
                      {images.map((image, index) => (
                        <div key={image.path || image.url || index}>
                          <img src={image.url || image} alt={image.alt || `${post.title || post.naslov} – fotografija ${index + 1}`} loading="lazy" />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
              )}
              {!hasImages && videos.map((video, index) => (
                <video
                  key={video.path || video.url || index}
                  src={video.url || video}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${post.title || post.naslov} – video ${index + 1}`}
                  className="mb-6 w-full rounded-lg bg-black"
                />
              ))}
            </div>
          )}
          <div className={`w-full px-6 pt-6 text-center lg:pt-12 ${hasMedia ? "md:w-6/12" : "md:w-10/12 md:mx-auto"}`}>
            <div className="relative mb-8 flex min-w-0 flex-col break-words bg-blueGray-200 shadow-sm">
              <div className="flex-auto px-4 py-5 text-left">
                <RichContent blocks={post.contentBlocks} paragraphs={post.paragrafi} />
              </div>
              {post.link && (
                <div className="px-4 pb-6 text-center">
                  <a href={post.link} target="_blank" rel="noreferrer" className="font-semibold text-orange-500 underline">
                    Pročitaj više
                  </a>
                </div>
              )}
              {hasImages && videos.length > 0 && (
                <div className="mx-auto w-full px-4 pb-6 md:w-9/12">
                  {videos.map((video, index) => (
                    <video
                      key={video.path || video.url || index}
                      src={video.url || video}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={`${post.title || post.naslov} – video ${index + 1}`}
                      className="mb-4 w-full rounded-lg bg-black last:mb-0"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
