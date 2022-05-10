/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
// import { BsFillBellFill } from "react-icons/bs";
import CoreFeatureThumb from "assets/iphone13.svg";
import Briefcase from "assets/core-feature/briefcase.svg";
import Secure from "assets/core-feature/secure.svg";
import Notify from "assets/core-feature/notify.svg";
import Invoice from "assets/core-feature/invoice.svg";
import Contact from "assets/core-feature/contact.svg";
import Discount from "assets/core-feature/discount.svg";
import Customer from "assets/core-feature/customer.svg";
import Reports from "assets/core-feature/reports.svg";
import Deliver from "assets/core-feature/deliver.svg";
import Permissions from "assets/core-feature/permission.svg";
import List from "components/list";

const data = {
  subTitle: "Be in full control from one platform",
  title: "Ensure a seamless post-purchase experience for all customers.",
  features: [
    {
      id: 1,
      imgSrc: Notify,
      altText: "Automatic tracking information notification",
      title: "Automatic tracking information notification",
    },
    {
      id: 2,
      imgSrc: Invoice,
      altText: "Auto generated invoices",
      title: "Auto generated invoices",
    },
    {
      id: 3,
      imgSrc: Contact,
      altText: "Contact data management",
      title: "Contact data management",
    },
    {
      id: 4,
      imgSrc: Discount,
      altText: "Price and quantity discount rules",
      title: "Price and quantity discount rules",
    },

    // {
    //   id: 5,
    //   imgSrc: Deliver,
    //   altText: "Customer profiles and shipping preferences",
    //   title: "Customer profiles and shipping preferences",
    // },
    {
      id: 5,
      imgSrc: Customer,
      altText: "Customer support integrations",
      title: "Customer support integrations",
    },
    {
      id: 6,
      imgSrc: Reports,
      altText: "Picklists & Reports",
      title: "Picklists & Reports",
    },
    // {
    //   id: 8,
    //   imgSrc:  Permissions,
    //   altText: "User Permissions",
    //   title: "User Permissions",
    // },
  ],
};

export default function CoreFeature() {
  return (
    // <section sx={styles.coreFeature}>
    <Container sx={styles.containerBox}>
      <Box sx={styles.thumbnail}>
        <Image src={CoreFeatureThumb} sx={styles.thumbnailImg} />
      </Box>
      <Box sx={styles.contentBox}>
        <Box sx={styles.headingTop}>
          <TextFeature subTitle={data.subTitle} title={data.title} />
        </Box>

        <Grid gap="5px 0" columns={1} sx={styles.grid}>
          {data.features.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Image src={item.imgSrc} alt={item.altText} sx={styles.img} />

              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>

                {/* <Text sx={styles.wrapper.subTitle}>{item.text}</Text> */}
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Container>
    // </section>
  );
}

const styles = {
  coreFeature: {
    // py: [0, null, null, 2, null, 7],
    // position: "relative",
    // "&::before": {
    //   position: "absolute",
    //   content: '""',
    //   top: ["auto", null, null, "40%"],
    //   bottom: ["100px", 0, null, "auto"],
    //   left: 0,
    //   background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
    //   height: [350, 550, "50%"],
    //   width: "50%",
    //   zIndex: -1,
    //   borderTopRightRadius: "50%",
    //   borderBottomRightRadius: "50%",
    //   transform: ["translateY(0)", null, null, "translateY(-50%)"],
    // },
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: ["column", null, null, "row"],
    // backgroundColor: "black",
    // ml: "100px",
    // width: "auto",
    // height: "1000px",
  },
  thumbnailImg: {
    height: "562px",
    width: "750px",
    
    "@media screen and (max-width:1220px)": {
      display: "block",
      // mt: "50px",
    },
  },
  thumbnail: {

    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],

    // height: "1000px",
    mr: "100px",
    // backgroundColor: "red",
    "@media screen and (max-width:1220px)": {
      // display: "block",
      mr: 0,
      alignItems: "center",
      // mt: "50px",
      // width: "100%",
    },
    // height: "800px",
    // layout: "fill",
  },
  contentBox: {
    width: "35%",
    "@media screen and (max-width:1220px)": {
      width: "100%",
      display: "block",
      mr: 0,
      alignItems: "center",
      // mt: "50px",
      // width: "100%",
    },
    // pr: [0, null, "auto", null, null, 80],
    // pl: "auto",
    flexShrink: 0,
  },
  headingTop: {
    // pl: [0, null, null, null, "35px", null, "55px", 6],

    mb: "-15px",
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 30px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
  },
  card: {
    display: "flex",
    // alignItems: "flex-start",
    // backgroundColor: "red",
    alignItems: "center",
    // p: "1px",
    backgroundColor: "white",
    borderRadius: "10px",
    transition: "all 0.3s",
    width: ["100%", "85%", null, "100%"],
    mx: "auto",
    "&:hover": {
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0)",
        null,
        null,
        null,
        "0px 8px 24px rgba(69, 88, 157, 0.07)",
      ],
    },
  },

  img: {
    width: ["40px", null, "45px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  img1: {
    // layout: "fill",
    objectFit: "contain",
    height: "652px",
    width: "100%",
    position: "relative",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    m: "5px",
    flexDirection: "column",

    // pl: [0, null, null, null, "35px", null, "55px", 6],

    title: {
      // fontSize: 3,
      // color: "heading_secondary",
      // textAlign: "center",
      // fontWeight: 700,
      fontSize: 2,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      m: "10px",
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
