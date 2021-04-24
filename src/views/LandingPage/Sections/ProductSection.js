import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Empathy Shows</h2>
          <h5 className={classes.description}>
            For me the empathy for the customer is what drives me. And what better way to empower people than giving them well-designed tools?
            In my roles as product-owner, developer and designer I{"'"}ve made it a personal vendetta to erase badly designed applications.
            If you don{"'"}t feel inspired: It's not your fault, it{"'"}s the product.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Product Ownership"
              description="No matter the role, I only work on project I feel deeply invested in. That means that taking pride and ownership of my outcome becomes so much more natural."
              icon={Fingerprint}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Full-Stack Developer"
              description="I've never stopped being curious. Even as a kid I started programming, and I plan to never stop. It's where the ideas meet the tarmac and possibilities arise."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="UX Designer"
              description="The end goal is a great user experience. There I always strive to involve the consumer early in the process. Therefore drawing dreams is often the first step to success."
              icon={Chat}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
