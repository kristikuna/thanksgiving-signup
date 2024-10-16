import React, { useEffect, useState } from "react"
import { Typography, Box } from "@mui/material"

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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        align="center"
        variant="h2"
        color="var(--color-code-bg)"
        sx={{
          background: "var(--color-primary)",
          fontSize: "2.75rem",
          fontWeight: "bold",
          width: "80%",
        }}
      >
        FEAST STARTING IN:
      </Typography>
      {timeRemaining.days ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 2,
            textAlign: "center",
          }}
        >
          <Box paddingRight={3}>
            <Typography
              component="p"
              align="center"
              color="var(--color-text)"
              sx={{
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              {timeRemaining.days}
            </Typography>
            <Typography component="p" align="center" color="var(--color-text)">
              Days
            </Typography>
          </Box>
          <Box paddingRight={3}>
            <Typography
              component="p"
              align="center"
              color="var(--color-text)"
              sx={{
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              {timeRemaining.hours}
            </Typography>
            <Typography component="p" align="center" color="var(--color-text)">
              Hours
            </Typography>
          </Box>
          <Box paddingRight={3}>
            <Typography
              component="p"
              align="center"
              color="var(--color-text)"
              sx={{
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              {timeRemaining.minutes}
            </Typography>
            <Typography component="p" align="center" color="var(--color-text)">
              Minutes
            </Typography>
          </Box>
          <Box>
            <Typography
              component="p"
              align="center"
              color="var(--color-text)"
              sx={{
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              {timeRemaining.seconds}
            </Typography>
            <Typography component="p" align="center" color="var(--color-text)">
              Seconds
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography
          component="p"
          align="center"
          color="var(--color-text)"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            padding: "1rem",
          }}
        >
          "Calculating feast time..."
        </Typography>
      )}
    </Box>
  )
}

export default ThanksgivingCountdown
