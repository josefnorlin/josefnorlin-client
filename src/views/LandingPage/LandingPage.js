import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import profile from "assets/img/josef.jpg";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Josef Norlin"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.headerTitle}>
                Technology means nothing without humans.
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img
                    src={profile}
                    alt="Josef Norlin"
                    className={imageClasses}
                  />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Josef Norlin</h3>
                  <h6>HUMAN-CENTERED PRODUCT DEVELOPER</h6>
                  <Button justIcon link className={classes.margin5}>
                    <i className={"fab fa-twitter"} />
                  </Button>
                  <Button justIcon link className={classes.margin5}>
                    <i className={"fab fa-instagram"} />
                  </Button>
                  <Button justIcon link className={classes.margin5}>
                    <i className={"fab fa-facebook"} />
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
