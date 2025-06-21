import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MarginRounded } from "@mui/icons-material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: "5px",
  backgroundColor: "transparent",
  padding: "0px 0px 5px",
  
  "&:not(:last-child)": {
    // MarginRounded:'5px',
  },
  
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(({ theme }) => ({
  backgroundColor: "#b2bbff",
  borderRadius: "5px",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  color:'white',
}));

export default function QuestionAnswer() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="row ">
      <div className="col-md-6">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography component="span">What is GameZone?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>GameZone is a multi-mini-game experience packed into one exciting platform, offering 7 different games that test your reflexes, memory, logic, and creativity.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography component="span">How many mini games are included in GameZone?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>GameZone includes a total of 7 unique and challenging mini games.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography component="span">Is GameZone a single-player or multiplayer game?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>GameZone can be played multiplayer with friends.</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="col-md-6 ">
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography component="span">What types of mini games are included in GameZone?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>GameZone includes a mix of fast-paced reflex games, memory challenges, puzzle-solving, and skill-based games. Each game is unique and offers a different kind of challenge.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography component="span">Is GameZone free to play?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes! GameZone is free to download and play. Some cosmetic upgrades or bonus content may be available through in-app purchases, but the core gameplay is free.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography component="span">What platforms is GameZone available on?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>GameZone is available on PC. Just search for "GameZone" in the website to get started!</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
