import { PlayerOptions, SwiperDataList } from "@/custom";
  // 轮播的图片资源示例：
  // swiperData = [
  // {
  //   url: "https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg",
  //   class: "hideLeft",
  //   key: "1",
  // },
  // {
  //   url: "https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg",
  //   class: "prevLeftSecond",
  //   key: "2",
  // },
  // {
  //   url: "https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg",
  //   class: "prev",
  //   key: "3",
  // },
  // {
  //   url: "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg",
  //   class: "selected",
  //   key: "4",
  // },
  // {
  //   url: "https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg",
  //   class: "next",
  //   key: "5",
  // },
  // {
  //   url: "https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg",
  //   class: "nextRightSecond",
  //   key: "6",
  // },
  // {
  //   url: "https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg",
  //   class: "hideRight",
  //   key: "7",
  // },
  // ];
  
  const playerOptions = (
    url: string,
    poster: string
  ): PlayerOptions => {
    return {
      muted: false,
      fluid: true,
      language: "en",
      playbackRates: [0.9, 1.0, 1.5, 2.0],
      sources: [
        {
          type: "video/mp4",
          src: url,
        },
      ],
      poster,
    };
  }

  const swiperData: SwiperDataList[] = [
    {
      url: "/videos/A+.mp4",
      class: "prevLeftSecond",
      key: "K1",
      textContent: [
        `All K1 grade devices have passed a state-of-the-art diagnostic software test (K-Check) for a complete functional test of over 40+ test points. They can be described as functionally and cosmetically perfect flawless or like new. They do not have any signs of wear or use. `,
      ],
      playerOptions: playerOptions("/videos/A+.mp4", "/imgs/A+.png"),
    },
    {
      url: "/videos/A.mp4",
      class: "prev",
      key: "K2",
      textContent: [
        `All K2 grade devices have passed a state-of-the-art diagnostic software test (K-Check) for a complete functional test of over 40+ test points. They are 100% functional and, appear to be near perfect. Upon closer inspection, they have very few minor blemishes that can be seen rotating the device under the light. These blemishes often appear near the ports, corners, or Apple logo and rarely ever effect the main display. `,
      ],
      playerOptions: playerOptions("/videos/A.mp4", "/imgs/A.png"),
    },
    {
      url: "/videos/B.mp4",
      class: "selected",
      key: "K3",
      textContent: [
        `All K3 grade devices have passed a state-of-the-art diagnostic software test (K-Check) for a complete functional test of over 40+ test points. They are 100% functional and, appear to be flawless condition. Upon closer inspection, they may either have several light, small scratches or a few longer, light scratches on the screen or housing that are noticeable only when rotated in the light. These blemishes often appear near the ports, corners, or Apple logo and possibly although very lightly on the display. `,
        `A small percentage may have one slightly more pronounced imperfection, if they are in otherwise excellent condition.`,
      ],
      playerOptions: playerOptions("/videos/B.mp4", "/imgs/B.png"),
    },
    {
      url: "/videos/C+.mp4",
      class: "next",
      key: "K4",
      textContent: [
        `All K4 grade devices have passed a state-of-the-art diagnostic software test (K-Check) for a complete functional test of over 40+ test points. They are 100% functional and, appear to be used condition. They may have numerous scuffs or scratches on their housing and display but do not affect functionality or useability.`,
        `A small percentage may have one slightly more pronounced imperfection; however, they are in otherwise good used condition. K4 is a perfect working value candidate for a simple screen protector and a case to hide all imperfections.`,
      ],
      playerOptions: playerOptions("/videos/C+.mp4", "/imgs/C+.png"),
    },
    {
      url: "/videos/C.mp4",
      class: "nextRightSecond",
      key: "K5",
      textContent: [
        `
      All K5 grade devices have passed a state-of-the-art diagnostic software test (K-Check) for a complete functional test of over 40+ test points. They are 100% functional and, appear to be in a heavily used condition. They may have numerous scuffs or deep scratches on their housing and display, including the corners and back housings. There is no limit to the amount of physical imperfections, however K5 grade is a value candidate for refurbishment or a complete enclosed case.
      `,
      ],
      playerOptions: playerOptions("/videos/C.mp4", "/imgs/C.png"),
    },
  ];

  export default swiperData;
