import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Button, ButtonGroup, Grid, Link } from '@material-ui/core'
import { CloudUpload as CloudUploadIcon } from '@material-ui/icons'
import { CustomizedSelects } from './selectionButton'
import SearchInput from './searchInput'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15)
    },
    accordionSumary: {
      borderTop: 'groove 2px steelblue',
      backgroundColor: 'steelblue !important'
    },
    buttonGroup: {
      float: 'right'
    },
    button: {
      marginRight: theme.spacing(1),
      height: 'max-content',
      margin: 'auto'
    },
    accordGrid: {
      margin: 'auto'
    },
    sortText: {
      display: 'block',
      margin: 'auto'
    }
  }),
)

export default function ControlledAccordions(props: any) {
  const { text, label, value, url, isCrawlingAll, siteKey,
    crawlingAll
  } = props
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<boolean>(false)

  const handleChange = (panel: boolean) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded} onChange={handleChange(!expanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
          className={classes.accordionSumary}
        >
          <Grid container spacing={3}>
            <Grid item xs={4} className={classes.accordGrid}>
              <Typography className={classes.heading}>
                <Link component='button' href={url} target='_blank'
                  onClick={(e: any) => {
                    e.stopPropagation()
                    window.open(url, '_blank')
                  }}
                >
                  {`${
                    text ? text[label] || label || 'Name' : label || 'Name'
                    }: ${
                    text ? text[value] || value || 'unnamed noval' : value || 'unnamed noval'}`
                  }
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={8} className={classes.accordGrid}>
              {expanded && <ButtonGroup className={classes.buttonGroup} aria-label='small outlined button group'>
                <SearchInput />
                <CustomizedSelects />
                <Button
                  endIcon={<CloudUploadIcon />}
                  onClick={(e: any) => {
                    e.stopPropagation()
                    crawlingAll && typeof crawlingAll === 'function' && crawlingAll(siteKey)
                  }}
                  className={classes.button}
                  disabled={isCrawlingAll}
                >
                  {text?.crawlingData || 'Crawling'}
                </Button>
              </ButtonGroup>}
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          {props.children}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
