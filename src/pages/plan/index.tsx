import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import FeedIcon from '@mui/icons-material/Feed';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


const Plan = () => {
  return (
    <div style={{ background: '#fafafa', marginTop: '-120px' }}>
      <br />
      <Typography variant='h4' align='center' sx={{ color: '#050543', paddingTop: '20px', marginTop: '110px' }}>
        The Grand Plan
      </Typography>
      <Timeline position='alternate'>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: '60px' }} />
            <TimelineDot sx={{ color: '#f36a11' }} variant='outlined'>
              <VolunteerActivismIcon
                sx={{ fontSize: '70px', color: '#427646' }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="body1" component="span">
              Charity Work
            </Typography>
            <Typography variant='subtitle2'>2027</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: '60px' }} />
            <TimelineDot sx={{ color: '#f36a11' }} variant='outlined'>
              <AddShoppingCartIcon
                sx={{ fontSize: '70px', color: '#427646' }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="body1" component="span">
              E-commerce Platform
            </Typography>
            <Typography variant='subtitle2'>2023</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: '60px' }} />
            <TimelineDot sx={{ color: '#f36a11' }} variant='outlined'>
              <CurrencyExchangeIcon
                sx={{ fontSize: '70px', color: '#427646' }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="body1" component="span">
              The Afro Wallet
            </Typography>
            <Typography variant='subtitle2'>2023</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: '70px' }} />
            <TimelineDot sx={{ color: '#f36a11' }} variant='outlined'>
              <FeedIcon
                sx={{ fontSize: '70px', color: '#427646' }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="body1" component="span">
              PatriotiZim Site
            </Typography>
            <Typography variant='subtitle2'>2022</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default Plan


