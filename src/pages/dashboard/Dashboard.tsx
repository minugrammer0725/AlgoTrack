import { FC, ReactElement } from "react";
import { Grid } from "@mui/material";

import Content from "../../components/content/Content";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard:FC = (): ReactElement => {
  
  return (
    <Grid container minHeight={"100vh"} p={0} m={0}>
      <Content />
      <Sidebar />
    </Grid>
  )
}

export default Dashboard;