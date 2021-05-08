import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import team1 from "assets/img/faces/p-h.jpg";
import team2 from "assets/img/faces/peter.jpg";
// import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Recommendations</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={team1}
                  alt="Per-Håkan Bonnevier, Product-Owner, Swedish Public Employment Service"
                  className={imageClasses}
                  style={{ maxWidth: "160px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Per-Håkan Bonnevier
                <br />
                <small className={classes.smallTitle}>
                  Product-Owner, Swedish Public Employment Service
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Josef is taking initiatives, is thorough, focused,
                  constructive, productive, positive, open, cooperative,
                  responsive. Whoever hires Josef gets a really good and loyal
                  co-worker who also lifts others within the team.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={team2}
                  alt="Peter Webb, Multi-Entrepreneur, ePlanket"
                  className={imageClasses}
                  style={{ maxWidth: "160px" }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Peter Webb
                <br />
                <small className={classes.smallTitle}>
                  Multi-Entrepreneur, ePlanket
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Josef is incredibly good at what he does and always has a lot
                  of creative and good ideas, he is also very easy to work with
                  and he likes to solve problems and take on difficult
                  challenges.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Madeleine Rösth
                <br />
                <small className={classes.smallTitle}></small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem> */}
        </GridContainer>
      </div>
    </div>
  );
}
