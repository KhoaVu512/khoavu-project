// import Popper from '@mui/material/Popper/Popper'
// import Box from '@mui/material/Box';
// import { useState } from 'react'


// function PopperSearch() {

//   const [anchorEl, setAnchorEl] = useState<null | HTMLInputElement>(null);
//   const handleFocus = (event: React.MouseEvent<HTMLInputElement>) => {
//     setAnchorEl(anchorEl ? null : event.currentTarget);
//   };
//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popper' : undefined;

//   return (
//     <div>
//       <Popper
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//       >
//         <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
//           The content of the Popper.
//         </Box>
//       </Popper>
//     </div>
//   )
// }

// export default PopperSearch
