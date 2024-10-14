import React, { useEffect, useState } from "react"
import { Typography, Box } from "@mui/material"
import Spinner from "../Spinner/Spinner"

const ThanksgivingCountdown = () => {
  const thanksgivingDate = new Date("2024-11-28T00:00:00") // Thanksgiving 2024
  const [timeRemaining, setTimeRemaining] = useState({})

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date()
      const distance = thanksgivingDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeRemaining({ days, hours, minutes, seconds })
    }

    const timer = setInterval(calculateTimeRemaining, 1000)

    return () => clearInterval(timer) // Cleanup on component unmount
  }, [thanksgivingDate])

  return (
    <Box sx={{ padding: 2, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontSize: "2rem" }}>
        FEAST STARTING IN:
      </Typography>
      <Spinner />
      {timeRemaining.days ? (
        <>
          <Typography align="center" variant="h6">
            {timeRemaining.days}:{timeRemaining.hours}:{timeRemaining.minutes}:
            {timeRemaining.seconds}
          </Typography>
          <Typography component="span" align="center" variant="h6">
            Days Hours Minutes Seconds
          </Typography>
        </>
      ) : (
        <Typography variant="h6">"Calculating feast time..."</Typography>
      )}
    </Box>
  )
}

export default ThanksgivingCountdown
