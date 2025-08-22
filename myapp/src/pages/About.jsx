import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const About = () => {
  return (
    <>
      <Box bgcolor={'lavender'} py={'50px'}>
        <Typography variant='h3' align='center' sx={{textDecoration:'underline'}} color='primary.light'>
          About
        </Typography>
        <Box display={'flex'} p={10} margin={'auto'} width={'80%'} bgcolor={'skyblue'}>
          <Box width={'60%'}>
            <Typography variant='h3'marginBottom={2}>
              Border Hero with Cropped image and Shadows
            </Typography>
            <Typography variant='body1'paddingRight={10} marginBottom={2}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime non atque aliquid natus iure earum expedita laudantium, repellendus quibusdam harum quis, nemo, ducimus odio hic assumenda? Maxime ea accusamus omnis!
              Voluptas nulla voluptatem similique praesentium in quae temporibus odio culpa debitis, reiciendis porro atque veniam qui? Modi, dolor ex fuga iusto qui delectus incidunt sit quasi odit doloremque vero possimus.
              Vel, recusandae doloribus reiciendis obcaecati, amet, quasi deserunt omnis consequatur sequi magni ad! Ullam neque quod aliquid! Cupiditate sint accusamus sapiente vitae, ullam et odit aut omnis delectus laudantium veritatis?
              Odit dignissimos aliquam quia nostrum atque molestiae maxime ipsam saepe! Placeat dolorum explicabo natus possimus aliquid nam aut soluta laborum modi, vitae adipisci iure veniam magni libero animi ratione laboriosam.
              Perspiciatis pariatur nesciunt beatae incidunt, facilis dolor totam ea reiciendis error quod, aspernatur architecto id non, officia quaerat. Natus libero assumenda officia corrupti tempore cum a voluptatibus doloremque possimus sequi!
            </Typography>
            <Button variant='contained' color='primary' sx={{marginRight:'5px'}}>Primary</Button>
            <Button variant='outlined'>Default</Button>
          </Box>
          <Box width={'40%'} ClassName='bg-blue-200' >
            <img src="./11.jpg" alt="" />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default About