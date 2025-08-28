import { Button, Grid, TextField, Typography } from "@mui/material"

const Contact = () => {
  return (
    <>
      <Grid container width={'80%'} margin={'auto'} marginY={5}>
        <Grid size={{xs: 12, md: 6}} bgcolor={'success.light'}>
            <Typography variant="h4">Address</Typography>
            <Typography variant="h4">Kathmandu, Nepal</Typography>
            <Typography variant="h5">Phone: 01-2312313</Typography>
            <Typography variant="h6">Email: info@kathford.com</Typography>
            <Typography variant="h6">Web: www.Kathford.com</Typography>
        </Grid>
        <Grid size={{xs: 12, md: 6}} bgcolor={'warning.light'} padding={5}>
            <Typography variant="h4">Contact Form</Typography>
            <TextField label='E-mail' fullWidth required placeholder="your email here" helperText='example@smth.com' sx={{marginTop:'10px'}}></TextField>
            <TextField label='subject' fullWidth sx={{marginTop:'10px'}}/>
            <TextField label='Message' fullWidth multiline rows={4} sx={{marginTop:'10px'}}/>
            <Button variant="contained" fullWidth sx={{marginTop:'10px'}}>Submit</Button>
        </Grid>
        <Grid size={12} bgcolor={'info.light'}>
            Map
        </Grid>
      </Grid>
    </>
  )
}

export default Contact