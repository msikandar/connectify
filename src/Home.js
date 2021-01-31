import React, { useState } from "react";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

import {
  Input,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Home.css";

const Home = () => {
  const [url, seturl] = useState("");
  const handleChange = (e) => seturl(e.target.value);

  const join = (url) => {
    if (url !== "") {
      var url = url.split("/");
      window.location.href = `/${url[url.length - 1]}`;
    } else {
      var url = Math.random().toString(36).substring(2, 7);
      window.location.href = `/${url}`;
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "white",
      display: "flex",
      fontFamily: "system-ui",
    },
    logo: {
      maxWidth: 60,
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <VideocamOutlinedIcon
              style={{ fontSize: 40, color: "orangered", marginRight: "5px" }}
            />
            <Typography variant="h6" className={classes.title}>
              Connectify
            </Typography>
            {/* <Button
              variant="contained"
              color="light"
              onClick={() => join(url)}
              style={{
                // backgroundColor: "blue",
				
				fontWeight: 'bold'
              }}
            >
              New Meeting
            </Button> */}
          </Toolbar>
        </AppBar>
      </div>

      <div className="container2">
        <div
          style={{
            fontSize: "14px",
            width: "auto",
            textAlign: "center",
            margin: "auto",
            marginBottom: "10px",
          }}
        >
          <IconButton
            style={{ color: "black" }}
            onClick={() =>
              (window.open("https://github.com/0x5eba/Video-Meeting"))
            }
          >
            <GitHubIcon style={{ color: "black", fontSize: 30 }} />
          </IconButton>
          <IconButton
            style={{ color: "black" }}
            onClick={() =>
              (window.open("https://github.com/0x5eba/Video-Meeting"))
            }
          >
            <FacebookIcon style={{ color: "blue", fontSize: 30 }} />
          </IconButton>
          <IconButton
            style={{ color: "black" }}
            onClick={() =>
              (window.open("https://github.com/0x5eba/Video-Meeting"))
            }
          >
            <YouTubeIcon style={{ fontSize: 30, color: "#c4302b" }} />
          </IconButton>
          <IconButton
            style={{ color: "black" }}
            onClick={() =>
              (window.open("https://github.com/0x5eba/Video-Meeting"))
            }
          >
            <TwitterIcon style={{ fontSize: 30, color: "blue" }} />
          </IconButton>
          <IconButton
            style={{ color: "black" }}
            onClick={() =>
              (window.open("https://github.com/0x5eba/Video-Meeting"))
            }
          >
            <InstagramIcon style={{ fontSize: 30, color: "#E1306C" }} />
          </IconButton>
        </div>

        <div>
          <h1 style={{ fontSize: "50px" }}>
            {" "}
            Welcome To{" "}
            <span style={{ fontSize: "60px", color: "orangered" }}>
              Connectify
            </span>
          </h1>
          <p style={{ fontWeight: "200" }}>
            Web based tool for connecting people.
          </p>
        </div>

        <div
          style={{
            background: "white",
            width: "30%",
            height: "auto",
            padding: "20px",
            minWidth: "400px",
            textAlign: "center",
            margin: "auto",
            marginTop: "100px",
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>
            Start or join a meeting
          </p>
          <Input placeholder="URL" onChange={(e) => handleChange(e)} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => join(url)}
            style={{ margin: "20px" }}
          >
            Go <ArrowForwardIosOutlinedIcon style={{ fontSize: 15 }}/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
