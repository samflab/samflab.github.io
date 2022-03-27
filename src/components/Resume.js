import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Education from "./Education";
import Internship from "./Internship";
import Skills from "./Skills";
import Achievements from "./Achievements";
import "../styles/Resume.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#e1f5fe',
    display: "grid",
    gridTemplateColumns: "15% 85%",
    height: 224,
    color: "#000000",
  },
  indicator: {
    "&:focus": {
      color: "#90acd1",
      fontWeight: 800,
    },
    "&:active": {
      color: "#90acd1",
      fontWeight: 800,
    },
    "&:hover": {
      color: "#90acd1",
      fontWeight: 800,
    },
    "&::selected": {
      color: "#90acd1",
      fontWeight: 800,
    },
    color: "#000000",
    textTransform: "capitalize",
    fontSize: "0.9rem",
    fontWeight: 800,
  },
  tabs: {
    marginTop: "2rem",
  },
}));

function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab
          label="Education"
          {...a11yProps(0)}
          className={classes.indicator}
        />
        <Tab
          label="Internships"
          {...a11yProps(1)}
          className={classes.indicator}
        />
        <Tab label="Skills" {...a11yProps(2)} className={classes.indicator} />
        <Tab
          label="Achievements"
          {...a11yProps(3)}
          className={classes.indicator}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Education />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Internship />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Achievements />
      </TabPanel>
    </div>
  );
}

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    const { windowWidth } = this.state;
    return (
      <div className="entire-resume">
        {windowWidth >= 960 ? (
          <div className="Resume" id="resume">
            <h1 className="resume-header">Resume</h1>
            <div>
              <VerticalTabs />
            </div>
          </div>
        ) : (
          <div className="Resume" id="resume">
            <h1 className="resume-header">Resume</h1>
            <div className="responsive-resume">
              <Education/>
              <Internship/>
              <Skills/>
              <Achievements/>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Resume;
