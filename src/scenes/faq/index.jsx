import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the Elderly Care Network System?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Elderly Care Network System is a comprehensive platform designed
            to assist in managing and coordinating care for elderly individuals.
            It provides tools for caregivers, family members, and healthcare
            professionals to monitor, communicate, and ensure the well-being of
            elderly loved ones.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I sign up for the Elderly Care Network System?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To sign up, visit our website and click on the "Sign Up" button. You
            will need to provide some basic information about yourself and your
            elderly loved one to create an account. Once registered, you can
            start using the system to manage care activities.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is the system easy to use for someone who isn’t tech-savvy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the Elderly Care Network System is designed with simplicity in
            mind. The user interface is intuitive, and we offer tutorials and
            customer support to help users navigate the platform easily.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Does the system offer emergency support features?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the system includes emergency alert features that can notify
            caregivers and emergency services if there is a critical situation.
            The elderly person can trigger an alert with a single press,
            ensuring quick response times.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can multiple caregivers access the same account?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the system allows multiple caregivers, including family members
            and healthcare professionals, to access the same account. This
            ensures coordinated care and allows everyone involved to stay
            informed about the elderly person’s health and well-being.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
