const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins text-[60px] text-white  leading-[66.8px] w-full font-bold ",
  heading3: "font-poppins font-[800] xs:text-[45px] text-[45px] tex xs:leading-[76.8px] leading-[66.8px] w-full",

  paragraph: "font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "px-14 px-8",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-20 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;