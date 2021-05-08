import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import axios from "axios";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showError, setShowError] = useState(false);

  function sendMail() {
    setSubmitting(true);
    axios
      .post(
        "https://dwq809sql8.execute-api.us-east-1.amazonaws.com/prod/contact",
        {
          name,
          email,
          description,
        }
      )
      .then((res) => {
        setShowNotification(true);
        setSubmitting(false);
        console.log(res);
      })
      .catch((error) => {
        setShowError(true);
        setSubmitting(false);
        console.log(error);
      });
  }

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Snackbar
        open={showNotification}
        autoHideDuration={6000}
        onClose={() => setShowNotification(false)}
      >
        <Alert onClose={() => setShowNotification(false)} severity="success">
          Thank you for your message!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowNotification(false)}
      >
        <Alert onClose={() => setShowNotification(false)} severity="error">
          Something went wrong. Please try again.
        </Alert>
      </Snackbar>

      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s get in touch</h2>
          <h4 className={classes.description}>
            I{"'"}m always interested in new connections. Write here and I{"'"}
            ll get back to you.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  value={name}
                  formControlProps={{
                    onChange: (e) => setName(e.target.value),
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  value={email}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: (e) => setEmail(e.target.value),
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="description"
                value={description}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  onChange: (e) => setDescription(e.target.value),
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  onClick={() => sendMail()}
                  color="primary"
                  disabled={submitting}
                >
                  Send Message
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
