import { Grid } from "@mui/material";
import {
  ExaminationIcon,
  ReferenceDownloadablesIcon,
  SchedulesIcon,
  SendMessagesIcon,
  VideosOnDemandIcon,
  ZoomClassIcon,
} from "@/components/LandingPage/Icon";
import Logo from "@/assets/LandingPage/Logo.png";
import "./styles.css";

const ImageButtons = () => {
  const landingPageIcons = [
    { component: SchedulesIcon, label: "Schedule", link: "/schedule" },
    { component: ZoomClassIcon, label: "Zoom Class", link: "/zoom" },
    { component: ExaminationIcon, label: "Mock", link: "/mock" },
    {
      component: ReferenceDownloadablesIcon,
      label: "Downloadables",
      link: "/downloadable",
    },
    {
      component: VideosOnDemandIcon,
      label: "Videos On Demand",
      link: "/videos",
    },
    { component: SendMessagesIcon, label: "Send Messages", link: "/messages" },
  ];

  return (
    <div className="landing-page">
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            {landingPageIcons.slice(0, 3).map((icon, index) => (
              <Grid
                item
                xs={12}
                sx={{
                  textAlign: index === 1 || index === 4 ? "center" : "end",
                }}
                key={index}
              >
                <a href={icon.link} className="button-link">
                  {icon.component}
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={4} display={"flex"} justifyContent={"center"}>
          <img src={Logo} title="logo" className="logo-center" />
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            {landingPageIcons.slice(3, 6).map((icon, index) => (
              <Grid
                item
                xs={12}
                sx={{
                  textAlign: index === 1 || index === 4 ? "center" : "start",
                }}
                key={index}
              >
                <a href={icon.link} className="button-link">
                  {icon.component}
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ImageButtons;
