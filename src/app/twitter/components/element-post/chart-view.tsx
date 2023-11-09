import * as React from 'react'
import { useState } from 'react'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'

interface Props {
  width: number
  height: number
  textSize: number
}

function ChartView(props: Props) {
  const [countView, setCountView] = useState(0)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <button
        className="mt-[6px]  flex text-[#71767B] hover:text-violet-600"
        aria-describedby={id}
        onClick={handleClick}
      >
        <div className="cursor-pointer flex">
          <BarChartOutlinedIcon
            className="hover:fill-yellow-600 "
            sx={{
              width: `${props.width}`,
              height: `${props.height}`,
            }}
          />
          <div className={`text-[${props.textSize}px] ml-1`}>{countView}</div>
        </div>
      </button>
    </div>
  )
}

export default ChartView
