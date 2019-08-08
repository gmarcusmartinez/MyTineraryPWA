const styles = {
  formCard: {
    padding: '25px',
    marginTop: '25px'
  },
  cardTitle: {
    fontFamily: 'Caveat',
    fontSize: '30px',
    fontWeight: '300',
    color: '#e57373',
    marginTop: '12px'
  },
  wideBtn: {
    width: '100%',
    marginTop: '10px'
  },
  itineraryCard: {
    padding: 0,
    marginTop: '25px',
    height: '320px'
  },
  commonIcon: {
    color: '#e57373',
    borderRadius: '50%',
    border: '1px solid #e57373',
    fontSize: '1.5rem',
    padding: '8px',
    margin: '10px',
    position: 'relative',
    boxShadow: '2px 6px #eeeeee',
    '&:hover': {
      color: 'white',
      backgroundColor: '#e57373',
      boxShadow: '1px 3px #eeeeee',
      top: '3px'
    },
    '&:active': {
      boxShadow: 'none',
      top: '6px',
      left: '2px'
    }
  },
  flexContainer: {
    padding: '0',
    margin: '0',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  small: {
    fontFamily: 'Caveat',
    color: '#e57373',
    fontSize: '1.25rem'
  },
  itineraryImg: {
    filter: 'brightness(60%)',
    height: '250px',
    objectFit: 'cover',
    '&:hover': {
      filter: 'brightness(100%)'
    }
  }
}

export default styles
