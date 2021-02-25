import AudioPlayer from "material-ui-audio-player";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const footerPanelStyle = makeStyles((theme) => ({
  root: {
    marginTop: "auto",
    height: "auto",
  },
}));

export default function App(params) {
  const footerClass = footerPanelStyle();
  return (
    <>
      <Grid container justify="center" direction="row">
        <Grid item>P</Grid>
      </Grid>
      <div className={footerClass.root}>
        <Grid container justify="center" direction="row" alignItems="flex-end">
          <Grid item xs={12}>
            <AudioPlayer
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              elevation={1}
              width="100%"
              variation="default"
              spacing={2}
              order="standart"
              preload="auto"
              loop={true}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
