/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import { useState } from "react";
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Flex,
  Button,
  Heading,
  Text,
} from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import PaymentThumb from "assets/paymentThumb.png";
import PaymentPattern from "assets/payment-pattern.png";
import Brochure from "assets/Brochure.png";
import Website from "assets/Website.png";
const heading = {
  heading: "Contact Us",
};
const data = {
  subTitle: "",
  title: "Contact ",
  description: "+91 - 9871965334",
  // btnName: "Learn More",
  // btnURL: "#",
};
const data2 = {
  // subTitle: "",
  title: "Based in",
  contents: (
    <div>
      G11-12,SRS TOWER<br></br>
      Sector 31<br></br>
      Faridabad<br></br>
      Haryana (121003)
    </div>
  ),
};
const data3 = {
  title: "Get in Touch",
};


export default function Dialog() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [source, setSource] = useState("");
  const [organization, setOrganization] = useState("");
  const [designation, setDesignation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      mobile,
      source,
      organization,
      designation,
    };
    submit();
    console.log(data.name);
  };

  return (
    <section >
      <Box sx={styles.bgOverlay} />
      <Container sx={styles.containerBox2}>
        

        <Container sx={styles.containerBox3}>
          <TextFeature
            // subTitle={data2.subTitle}
            title={data3.title}
           
          />
          <Box as="form" onSubmit={handleSubmit}>
       

            <Button
              sx={styles.save}
              // onClick={() => {
              //   this.handleCollapse(submit());
              // }}
              type="submit"
            >
              Save
            </Button>
          </Box>
        </Container>
      </Container>
    </section>
  );
}

const styles = {
  bgOverlay: {
    display: "flex",
    backgroundColor: "red",
    // position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    zIndex: -1,
    width: [
      "100%",
      null,
      null,
      "calc(50% + 400px)",
      "calc(50% + 480px)",
      "calc(50% + 570px)",
      null,
      "calc(50% + 625px)",
    ],
    backgroundImage: `url(${PaymentPattern})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
  },
  containerBox2: {
    display: "flex",
    borderRadius: "15px",
    backgroundColor: "#1F3E76",
    "@media screen and (max-width:1220px)": {
      display: "block",
      //   p: "1000px",
      //   pb: "30px",
    },
    p: "20px",
    // alignItems: "flex-start",
    // justifyContent: "space-between",
    // flexWrap: ["wrap", null, null, "nowrap"],
  },
  save: {
    // alignItems: "center",
    // justifyContent: "cen0ter",
    // position: "absolute",
    // bottom: "10%",
    // left: "50%",
  },
  containerBox3: {
    // display: "flex",
    m: "30px",
    backgroundColor: "white",
    borderRadius: "15px",
    alignItems: "center",
    p: "20px",
    "@media screen and (max-width:1220px)": {
      m: "0px",
      //   fontSize: "20px",
    },

    // alignItems: "flex-start",
    justifyContent: "center",
    // flexWrap: ["wrap", null, null, "nowrap"],
  },

  contentBox: {
    // backgroundColor: "black",
    // color: "white",
    p: "10px",
    title: {
      color: "white",
      fontSize: "45px",
      "@media screen and (max-width:1220px)": {
        fontSize: "20px",
        // fontSize:""
        // m: "30px",
      },
    },
    desc: {
      color: "white",
      "@media screen and (max-width:1220px)": {
        fontSize: "10px",
        // fontSize:""
        // m: "30px",
      },
    },
  },
  title: {
    color: "white",
    fontSize: "65px",
    "@media screen and (max-width:1220px)": {
      display: "none",
      // fontSize:""
      // m: "30px",
    },
  },
  containerBox: {
    p: "20px",
    "@media screen and (max-width:1220px)": {
      fontSize: "15px",
      display: "flex",
      justifyContent: "space-between",
      // fontSize:""
      // m: "30px",
    },
  },
  // thumbnail: {
  //   mb: -2,
  //   ml: [-4, "-40px", null, null, 0],
  //   order: [2, null, null, 0],
  //   pr: [6, null, 7, 0],
  // },
  // contentBox: {
  //   width: ["100%", 420, 480, 380, 500, 570],
  //   mx: "auto",
  //   flexShrink: 0,
  //   textAlign: ["center", null, null, "left"],
  //   pt: [0, null, null, 4, "50px", null, 4, "80px"],
  //   pl: [0, null, null, 40, "90px"],
  //   pb: [7, null, null, 9],
  //   pr: [0, null, null, null, null, 6],
  // },
};
// export default function handler (req, res){
//   if (req.method === 'GET'){
//      res.status (200);
//     }else if (req.method === 'POST'){
//       const name=req.body.name
//  }}
